import React, {useState} from 'react';
import QuestionOptions from './questionOptions';
import Alert from './alert';
import useLocalStorage from './hooks/useLocalStorage';
import ReactHtmlParser from 'react-html-parser';
import MathSymbolWrapper from './mathSymbolWrapper';
import MathSymbolWrapperText from './mathSymbolWrapperText';

const QuestionDetail = ({ quesAnswer,quesDes,quesOptions, group, ques, fireBaseDB }) => {
    const [questionsAnswered, setQuestionsAnswered] = useLocalStorage('questionsAnswered', [])
    const [answer, setAnswer] = useState({
        didAnswer: false, 
        optionChecked: ''
    });
    

    const onClickResponse = (value) => {
        questionsAnswered.push({
            group, ques
        });
        setQuestionsAnswered(questionsAnswered);
        const response = {
            answer: value,
            correctAnswer: quesAnswer,
            isCorrect: value === quesAnswer,
            quesId: ques
        };
        var key = fireBaseDB.ref().child(`/app/groupsResults/${group}`).push().key;
        const update = {};
        update[`/app/groupsResults/${group}/${key}`] = response;
        fireBaseDB.ref().update(update);
        setAnswer({didAnswer: true, optionChecked: value});
    }

    if(answer.didAnswer)
    {
        if(answer.optionChecked === quesAnswer){
            return <Alert type="success" 
            title="En hora buena 😃"
            message="Tu respuesta fue correcta, sigue demostrando tus habilidades 👌." />
        }else{
            return <Alert type="danger" title="uppps 🙁" message="Tu respuesta fue incorrecta, mejor suerte para la proxima 👍." />
        }
        
    }
    return (
        <React.Fragment>
        <div className="card border-primary mb-3" style={{width: '35rem'}}>
            <div className="card-header">
                {ReactHtmlParser(quesDes, {transform: function(node, index) {
                        if(node.type ==="tag" && node.name === "mathsymbolwrapper"){
                            return <MathSymbolWrapper key={index} value={node.attribs['value']}/>
                        }
                        if(node.type === "tag" && node.name === "mathsymbolwrappertext" ){
                            return <MathSymbolWrapperText key={index} value={node.attribs['value']} />
                        }
                    }
                })}
            </div>
            <div className="card-body">
                <h4 className="card-title">Selecciona tu respuesta <span role="img" aria-label=" Check">✔️</span></h4>
                <QuestionOptions options={quesOptions} onClick={onClickResponse}/>
            </div>
        </div> 
      </React.Fragment>
    );
}

export default QuestionDetail;