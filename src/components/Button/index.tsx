import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  isYellow?: boolean;
  isFullSize?: boolean;
  size?: 'small';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, isYellow, isFullSize, size }) => {
  const classes = cn(s.root, { [s.color_yellow]: isYellow }, { [s.width_full]: isFullSize }, { [s.size_small]: size });

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
