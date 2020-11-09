import React from 'react';

import { MENU } from '../Menu';

import s from './MobileMenu.module.scss';

const MobileMenu = () => {
  return (
    <nav className={s.root}>
      <ul className={s.list}>
        {MENU.map(({ id, value, link }) => (
          <li className={s.item} key={id}>
            <a className={s.link} href={link}>
              {value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
