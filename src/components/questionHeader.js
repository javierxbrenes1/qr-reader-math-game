/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import QuestionDetail from './questionDetail';
import Spinner from './spinner';
import Alert from './alert';
import CardContainer from './cardContainer';

const QuestionHeader = ({params, fireBaseDB}) => {
    const [question, setQuestion] = useState({
        loading: true,
        failed: false, 
        quesAnswer: '',
        quesDes: '',
        quesOptions:[]
    })
    
    useEffect(() => {
        const path = `/app/groups/${params.group}`;
        fireBaseDB.ref(path).once('value').then(snapshot => {
            if(snapshot.val() === null)
            {
                setQuestion({
                    ...question,loading: false, failed: true
                }); 
    
            }
            else{
            var questionData = snapshot.val()[params.ques];
    
            if(questionData === undefined || questionData === null){
                setQuestion({
                    ...question,loading: false, failed: true
                });
            }else{
                setQuestion({
                    ...questionData, loading: false, failed: false, 
                });
            }
        }
        })
    }, []);
    
        return (<CardContainer>
                                {question.loading 
                                ? <div className="h3">
                                    <Spinner />
                                </div> 
                                : question.failed 
                                ? <Alert type="light" title="Ups.! 🙄" message="La pregunta no pudo ser encontrada. 🤷" />  
                                : <QuestionDetail { ...question } {...params} fireBaseDB={fireBaseDB}/> }
                </CardContainer>);
}

export default QuestionHeader
