import React from 'react';

import s from './MobileMenu.module.scss';

const MobileMenu = () => {
  return (
    <nav className={s.wrap}>
      <ul className={s.list}>
        <li className={s.item}>
          <a className={s.link} href="/">
            Home
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/">
            Pokédex
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/">
            Legendaries
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/">
            Documentation
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
