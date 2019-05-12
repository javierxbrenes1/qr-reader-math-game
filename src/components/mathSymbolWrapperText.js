import React from 'react'
import MathJax from 'react-mathjax2';

const MathSymbolWrapperText = ({value}) => {
    console.log(value)
  return (
    <MathJax.Context 
     input='ascii'> 
    <MathJax.Text text={value}/>
</MathJax.Context>
  )
}

export default MathSymbolWrapperText