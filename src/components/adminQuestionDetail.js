import React from 'react'
import AdminQuestionDetailItem from './adminQuestionDetailItem';

const AdminQuestionDetail = ({question, anwserDetails}) => {
   // const answerAsArray = Array.from(Object.keys(anwserDetails), k => anwserDetails[k]);
    const questionAsArray = Array.from(Object.keys(question).filter(r=> r !== 'desc'), k => ({...question[k], quesId: k}));

    var questionItems = questionAsArray.map(r => <AdminQuestionDetailItem key={r.quesId} id={r.quesId} quesDes={r.quesDes} />);

    return <React.Fragment>
        {questionItems}
    </React.Fragment>
}

export default AdminQuestionDetail
