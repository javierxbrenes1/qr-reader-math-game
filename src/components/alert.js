import React from 'react';

const Alert = ({ type, title, message }) => (
  <>
    <div className={`alert alert-dismissible alert-${type}`}>
      <h4 className="alert-heading">{title}</h4>
      <p className="mb-0">{message}</p>
    </div>
  </>
);

export default Alert;
