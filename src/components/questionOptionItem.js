import React from 'react'
import MathSymbolWrapper from './mathSymbolWrapper'
import MathSymbolWrapperText from './mathSymbolWrapperText';

const QuestionOptionItem = ({question, withInput, p, ml}) => {

    const {type, value, optionId} = question;
  return (
        <div className={`ml-${ml} p-${p}`}>
            <label className="form-check-label d-flex">
               { !withInput ? <span className="pr-3">Opción {optionId}: </span> : <input  type="radio" className="form-check-input options align-self-center" value={optionId} name="options" id={`option${optionId}`}  />}
                <div className="align-self-center" style={{textWeight: 'bold'}}>
                { type === 'text' ? <span>{value}</span> : type==='math' ? <MathSymbolWrapper value={value} /> : <MathSymbolWrapperText value={value} />}
                </div>
            </label>
        </div>
  )
}
QuestionOptionItem.defaultProps = {
    withInput: true,
    p:3,
    ml:3,
}

export default QuestionOptionItem
