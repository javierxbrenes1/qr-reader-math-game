import React,{useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Zone from './components/zone';
import FireBaseInit from './components/fireBaseConfig';

import './App.css';


const App = () => {
  
var dataBase = FireBaseInit();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Zone fireBaseDB={dataBase}/>
    </Router>
  );
}

export default App;
