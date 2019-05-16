/* eslint-disable react-hooks/exhaustive-deps */
import  {useMemo} from 'react'
import orderBy from 'lodash/orderBy';

const useGetQuestionsAsArray = (question, tens) => {
    const questionAsArray = useMemo(() => orderBy(Array.from(Object.keys(question).filter(r=> r !== 'desc'), 
    k => ({...question[k], quesId: k, shortestId: parseInt(k.replace('ques',''))})), ['shortestId']), [question]);
    const dataFiltered =  useMemo(() => questionAsArray.filter(r => {
        const discr = parseInt((r.shortestId / 10) % 10);
        return discr === tens;
    }),[tens]);
    return [questionAsArray.length, dataFiltered];
}

export default useGetQuestionsAsArray
