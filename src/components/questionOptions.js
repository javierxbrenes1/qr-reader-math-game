import React, {useState} from 'react'
import QuestionOptionItem from './questionOptionItem';
import Alert from './alert';

const QuestionOptions = ({options, onClick}) => {
const [optionChecked, setOption] = useState('');
const [notOptionChecked, setNotOptionChecked] = useState(false);

const onClickOption = (e) =>{
    if(e.target.classList.contains('options')){
        setOption(e.target.value);
    }
}

const onClickButton = () => {
    if(optionChecked === ''){
        setNotOptionChecked(true);
    }else{
        onClick(optionChecked);
    }
}

  const comps = options.map(r => <QuestionOptionItem key={r.optionId} question={r} p={2}/>);

  return (
    <React.Fragment>
        <fieldset className="form-group" onClick={onClickOption}>
            <legend>Opciones</legend>
            {comps}
        </fieldset>
        <div className="text-right">
            <input type="button" className="btn btn-primary btn-lg" value="Aceptar" onClick={onClickButton}/>
        </div>
        {notOptionChecked ? <div className="mt-3"><Alert type="warning" title="No hay respuesta 🤨" message="Debes marcar al menos una (☝️) opción para continuar."/></div> : null}
    </React.Fragment>
  )
}

export default QuestionOptions
