import React from 'react';
import {Route} from 'react-router-dom';
import Question from './question';

const Zone = ({fireBaseDB}) =>  {

    return (<Route path="/:group?/:ques?">
            <Question fireBaseDB={fireBaseDB}/>
        </Route>);

}

export default Zone;