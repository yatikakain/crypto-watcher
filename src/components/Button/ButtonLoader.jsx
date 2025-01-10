import React from 'react';

import classes from './Button.module.scss';

const ButtonLoader = ({ color }) => {
  const loaderStyle = {
    '--loader-bg': color || 'var(--white)',
  };

  return (
    <div className={classes.ldsRing} style={loaderStyle}>
      <div className={classes.div}></div>
      <div className={classes.div}></div>
      <div className={classes.div}></div>
      <div className={classes.div}></div>
    </div>
  );
};

export default ButtonLoader;
