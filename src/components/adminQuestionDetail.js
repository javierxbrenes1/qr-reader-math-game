/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState} from 'react'
import AdminQuestionDetailItem from './adminQuestionDetailItem';
import useGetQuestionsAsArray from './hooks/useGetQuestionsAsArray';
import ReactPaginate from 'react-paginate';



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

    return (<div className="w-100">
             <div className="row">
                <div className="col-12">
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
                </div>
       
                <div className="row">
                    {questionItems} 
              </div>
                
            </div>);
}

export default AdminQuestionDetail
