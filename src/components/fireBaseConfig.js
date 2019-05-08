import * as firebase from 'firebase/app';
import 'firebase/database';

const FireBaseInit = () =>
{
    var firebaseConfig = {
        apiKey: "AIzaSyA0_QZHdFSdqdrj8u5KTtpxkwH6qsfdyz0",
        authDomain: "math-game-8294f.firebaseapp.com",
        databaseURL: "https://math-game-8294f.firebaseio.com",
        projectId: "math-game-8294f",
        storageBucket: "math-game-8294f.appspot.com",
        messagingSenderId: "254817267920",
        appId: "1:254817267920:web:182ce1fcc2004057"
      };

      firebase.initializeApp(firebaseConfig);

      return firebase.database();

}


export default FireBaseInit;