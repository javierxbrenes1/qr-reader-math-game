import React, {useState} from 'react'
import MathSymbolWrapper from './mathSymbolWrapper'

const QuestionOptions = ({options, onClick}) => {
const [optionChecked, setOption] = useState('');

const onClickOption = (e) =>{
    if(e.target.classList.contains('options')){
        setOption(e.target.value);
    }
}

const onClickButton = () => {
    onClick(optionChecked);
}

    var comps = options.map(r => (<div key={r.optionId} className="ml-3 p-3">
                                    <label className="form-check-label d-flex">
                                        <input  type="radio" className="form-check-input options align-self-center" value={r.optionId} name="options" id={`option${r.optionId}`}  />
                                        <div className="align-self-center" style={{textWeight: 'bold'}}>
                                            { r.type === 'text' ? <span>{r.value}</span> : <MathSymbolWrapper value={r.value} /> }
                                        </div>
                                    </label>
                                  </div>));

  return (
    <React.Fragment>
        <fieldset className="form-group" onClick={onClickOption}>
            <legend>Opciones</legend>
            {comps}
        </fieldset>
        <div className="text-right">
            <input type="button" className="btn btn-primary btn-lg" value="Aceptar" onClick={onClickButton}/>
        </div>
    </React.Fragment>
  )
}

export default QuestionOptions
