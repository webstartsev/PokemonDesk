import React from 'react';

import Logo from '../Logo';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';

import s from './Header.module.scss';

const Header = () => {
  return (
    <>
      <header className={s.root}>
        <div className={s.wrap}>
          <Logo />
          <Menu />
        </div>
      </header>

      <MobileMenu />
    </>
  );
};

export default React.memo(Header);
