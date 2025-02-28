import React from 'react';
import classes from './MainButton.module.scss';

const MainButton = ({ type = 'primary', label = 'Click Me', onClick }) => {
  const buttonClass = type === 'primary' ? classes.primary : classes.secondary;

  return (
    <button className={`${classes.btn} ${buttonClass}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default MainButton;
