import React from 'react';

import { cn } from '../../libs/classnames';

import classes from './Button.module.scss';
import ButtonLoader from './ButtonLoader';

export const BaseButton = ({
  children,
  variant = 'primary',
  styles,
  className,
  isLoading,
  ...rest
}) => {
  return (
    <button
      className={cn([
        className,
        classes.btn,
        classes[variant],
        { [classes.loading]: isLoading },
      ])}
      style={{ ...styles }}
      {...rest}
    >
      {variant === 'primary' ? <div className={classes.green}></div> : null}
      {isLoading ? <ButtonLoader color={''} /> : <>{children}</>}
    </button>
  );
};
