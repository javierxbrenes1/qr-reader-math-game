import React,{useState} from 'react';
import {HashRouter } from 'react-router-dom';
import Zone from './components/zone';
import FireBaseInit from './components/fireBaseConfig';

import './App.css';


const App = () => {
  
var dataBase = FireBaseInit();

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Zone fireBaseDB={dataBase}/>
    </HashRouter>
  );
}

export default App;
