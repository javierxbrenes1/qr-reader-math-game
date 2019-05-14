import React from 'react';
import {withRouter} from 'react-router-dom';
//import useLocalStorage from './hooks/useLocalStorage';
import QuestionHeader from './questionHeader';
//import Alert from './alert';
//import CardContainer from './cardContainer';
const Question = ({match, fireBaseDB}) => {
  
    const {params} = match;
  
  return <QuestionHeader fireBaseDB={fireBaseDB} params={params}/>
  /*  return (<CardContainer><Alert type="light" 
    title="Pregunta respondida 😝"
    message="Esta pregunta ya ha sido respondida." /></CardContainer>); */
}

export default withRouter(Question);