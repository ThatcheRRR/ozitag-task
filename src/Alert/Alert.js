import React from 'react';
import './alert.scss';

const Alert = ({ children }) => {
  return (
    <div className = 'alert'>{children}</div>
  );
};

export default Alert;