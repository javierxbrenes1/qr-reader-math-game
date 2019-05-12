import React from 'react'
import MathJax from 'react-mathjax2';

const MathSymbolWrapper = ({value}) => {
  return (
    <MathJax.Context> 
    <MathJax.Node inline>{value}</MathJax.Node>
</MathJax.Context>
  )
}

export default MathSymbolWrapper
