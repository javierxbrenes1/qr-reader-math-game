/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo} from 'react'
import AdminQuestionDetailItem from './adminQuestionDetailItem';
import orderBy from 'lodash/orderBy';

const AdminQuestionDetail = ({question, answerDetails}) => {
    
    const questionAsArray = useMemo(() => orderBy(Array.from(Object.keys(question).filter(r=> r !== 'desc'), k => ({...question[k], quesId: k, shortestId: parseInt(k.replace('ques',''))})), ['shortestId']), []);
    console.log(answerDetails);

    var questionItems = questionAsArray.map(r => <AdminQuestionDetailItem 
                                                    key={r.shortestId} 
                                                    id={r.shortestId}
                                                    quesDes={r.quesDes} 
                                                    answer={r.quesAnswer} 
                                                    options={r.quesOptions} 
                                                    answers={answerDetails[r.quesId]}/>);

    return <React.Fragment>
        {questionItems}
    </React.Fragment>
}

export default AdminQuestionDetail
