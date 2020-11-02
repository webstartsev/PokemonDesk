import React from 'react';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.container}>
      <div className={s.wrap}>
        <Logo />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
