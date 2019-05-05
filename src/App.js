import React from 'react';
import {HashRouter, Route,Switch  } from 'react-router-dom';
import Admin from './components/admin';
import Question from './components/question';
import FireBaseInit from './components/fireBaseConfig';

import './App.css';


const App = () => {
  
var dataBase = FireBaseInit();
//   basename={process.env.PUBLIC_URL}
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact={true}  path="/:group/:ques">
          <Question fireBaseDB={dataBase}/>
        </Route>
        <Route  path="/admin">
          <Admin fireBaseDB={dataBase}/>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
