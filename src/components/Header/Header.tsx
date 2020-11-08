import React from 'react';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import MobileMenu from '../MobileMenu/MobileMenu';

import s from './Header.module.scss';

const Header = () => {
  return (
    <>
      <header className={s.container}>
        <div className={s.wrap}>
          <Logo />
          <Menu />
        </div>
      </header>

      <MobileMenu />
    </>
  );
};

export default Header;
