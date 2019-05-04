import React, {useState} from 'react';
import QuestionOptions from './questionOptions';
import Alert from './alert';
import useLocalStorage from './hooks/useLocalStorage';

const QuestionDetail = ({ quesAnswer,quesDes,quesOptions, group, ques }) => {
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
            <div className="card-header h3 text-center"><span role="img" aria-label="Thinker">🤔</span> {quesDes}</div>
            <div className="card-body">
                <h4 className="card-title">Selecciona tu respuesta <span role="img" aria-label=" Check">✔️</span></h4>
                <QuestionOptions options={quesOptions} onClick={onClickResponse}/>
            </div>
        </div> 
      </React.Fragment>
    );
}

export default QuestionDetail;