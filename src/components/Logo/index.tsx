import React from 'react';

import s from './Logo.module.scss';
import { ReactComponent as LogoSvg } from '../../assets/img/Logo.svg';

const Logo = () => {
  return (
    <div className={s.root}>
      <LogoSvg />
    </div>
  );
};

export default React.memo(Logo);
