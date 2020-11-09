import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

type ButtonColor = 'green' | 'yellow';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  color?: ButtonColor;
  isFullSize?: boolean;
  size?: ButtonSize;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = 'green',
  className,
  isFullSize,
  size = 'medium',
}) => {
  const classes = cn(s.root, className, s[color], s[size], { [s.width_full]: isFullSize });

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
