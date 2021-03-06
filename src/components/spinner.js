import React from 'react'

const Spinner = () => {
  return (
    <div className="text-center my-5">
      <div className="spinner-border" role="status">
          <span className="sr-only">Espera mientras se carga tu pregunta...</span>
      </div>
    </div>
  )
}

export default Spinner;
