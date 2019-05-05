import React, {useEffect} from 'react'

const Admin = ({fireBaseDB}) => {


   useEffect(() => {
    //read the questions just once.
    const path = `/app/groups`;
    fireBaseDB.ref(path).once('value').then(snapshot => {
        console.log(snapshot.val());
    });
    //suscribe the app to every change on groupsResults
    const groupsResultsRef = fireBaseDB.ref('/app/groupsResults');
    groupsResultsRef.on('value', snapshot => {
        var obj = snapshot.val();
        console.log(obj);
        var prueba = Array.from(Object.keys(obj), k => obj[k]);
        console.log(prueba);
    });

   });

  return (
    <div>
      hola soy el admin
    </div>
  )
}

export default Admin;
