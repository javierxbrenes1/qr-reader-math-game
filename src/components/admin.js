/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import Spinner from './spinner';
import AdminDetails from './adminDetails';

const Admin = ({ fireBaseDB }) => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState({});
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    // read the questions just once.
    const path = `/app/groups`;

    fireBaseDB
      .ref(path)
      .once('value')
      .then(snapshot => {
        setQuestions(snapshot.val());
      });
    // suscribe the app to every change on groupsResults
    const groupsResultsRef = fireBaseDB.ref('/app/groupsResults');
    groupsResultsRef.on('value', snapshot => {
      const obj = snapshot.val();
      setAnswers(obj);
    });
    setLoading(false);
  }, []);

  const removeStadistics = groupId => {
    const ref = fireBaseDB.ref(`/app/groupsResults/${groupId}`);
    ref.remove();
  };

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Estadisticas</h1>
          <blockquote className="blockquote">
            <p className="mb-0">El mundo de las matematicas</p>
          </blockquote>
          <p className="lead">
            Preguntas, sus opciones y respuestas correctas, asi como un resumen
            del conocimiento de los estudiantes.
          </p>
        </div>
      </div>
      <div className="container">
        {loading ||
        answers === null ||
        answers === undefined ||
        Object.entries(answers).length === 0 ? (
          <Spinner />
        ) : (
          <AdminDetails
            questions={questions}
            answers={answers}
            removeStadistics={removeStadistics}
          />
        )}
      </div>
      <ScrollUpButton />
    </div>
  );
};

export default Admin;
