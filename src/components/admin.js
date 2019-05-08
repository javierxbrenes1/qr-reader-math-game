/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import Spinner from './spinner';
import AdminDetails from './adminDetails';

const Admin = ({fireBaseDB}) => {
        const [loading, setLoading] = useState(true);
        const [questions, setQuestions] = useState({});
        const [answers, setAnswers] = useState({});

   useEffect(() => {
    //read the questions just once.
    const path = `/app/groups`;

    fireBaseDB.ref(path).once('value').then(snapshot => {
        setQuestions(snapshot.val());
    });
    //suscribe the app to every change on groupsResults
    const groupsResultsRef = fireBaseDB.ref('/app/groupsResults');
    groupsResultsRef.on('value', snapshot => {
        var obj = snapshot.val();
        setAnswers(obj);
        //console.log(obj);
        //var prueba = Array.from(Object.keys(obj), k => obj[k]);
        //console.log(prueba);
    });
    setLoading(false);
   }, []);

  return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-12">
            <div className="d-flex justify-content-center mt-5">
                {
                    loading || Object.entries(answers).length === 0 ? <Spinner /> : <AdminDetails questions={questions} answers={answers} />
                }
                </div>
                </div>
            </div>
        </div>
  )
}

export default Admin;
