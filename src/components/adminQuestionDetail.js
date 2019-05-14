/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo, useState, useEffect} from 'react'
import AdminQuestionDetailItem from './adminQuestionDetailItem';
import orderBy from 'lodash/orderBy';
import ReactPaginate from 'react-paginate';

const useGetQuestionsAsArray = (question, tens) => {
    const questionAsArray = useMemo(() => orderBy(Array.from(Object.keys(question).filter(r=> r !== 'desc'), 
    k => ({...question[k], quesId: k, shortestId: parseInt(k.replace('ques',''))})), ['shortestId']), []);
    const dataFiltered =  useMemo(() => questionAsArray.filter(r => {
        const discr = parseInt((r.shortestId / 10) % 10);
        return discr === tens;
    }),[tens]);
    return [questionAsArray.length, dataFiltered];
}

const AdminQuestionDetail = ({question, answerDetails}) => {
    const [tensDigit, setTensDigit] = useState(0);
    const [realDataLength, data] = useGetQuestionsAsArray(question, tensDigit);

    var questionItems = data.map(r => <AdminQuestionDetailItem 
                                                    key={r.shortestId} 
                                                    id={r.shortestId}
                                                    quesDes={r.quesDes} 
                                                    answer={r.quesAnswer} 
                                                    options={r.quesOptions} 
                                                    answers={answerDetails[r.quesId]}/>);

const onChange = (data) => {
    setTensDigit(data.selected);
}

    return (<div className="d-flex flex-column container-fluid">
                <div>
                    <ReactPaginate  
                    previousLabel={'anterior'}
                    nextLabel={'siguiente'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={(realDataLength + 10) / 10}
                    onPageChange={onChange}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                        />
                </div>
                <div className="row">
                    {questionItems} 
                </div>
            </div>);
}

export default AdminQuestionDetail
