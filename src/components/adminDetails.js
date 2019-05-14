import React from 'react'
import AdminGroupWrapper from './adminGroupWrapper';
import AdminQuestionDetail from './adminQuestionDetail';

const AdminDetails = ({questions, answers}) => {

    const questionsKeys = Object.keys(questions);
    
    const groupElements = questionsKeys.map( r => {
        const obj = questions[r];
        return (<AdminGroupWrapper key={r} id={r}  desc={obj.desc}>
                    <AdminQuestionDetail question={obj} answerDetails={answers[r]} />
                </AdminGroupWrapper>);
    })

  return (
    <div className="row w-100">
      {groupElements}
    </div>
  )
}

export default AdminDetails
