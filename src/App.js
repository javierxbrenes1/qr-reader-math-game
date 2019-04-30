import React,{useState} from 'react';
import './App.css';
import Reader from './Reader';

const App = () => {
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);

  const defineValue = (data) =>{
    if(data !== null){
      setValue(data);
      setActive(false);
    }
  }
  return (
    <div className="App">
      <h1 style={{cursor:'pointer'}} onClick={() => setActive(oldAct => setActive(!oldAct))}>Leer Qr</h1>
      {active ? <Reader setData={defineValue}/> : null}
      <div>{value}</div>
    </div>
  );
}

export default App;
