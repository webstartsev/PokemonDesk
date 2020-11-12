import React from 'react';

import s from './MobileMenu.module.scss';
import { GENERAL_MENU } from '../../routes';

const MobileMenu = () => {
  return (
    <nav className={s.root}>
      <ul className={s.list}>
        {GENERAL_MENU.map(({ title, link }) => (
          <li className={s.item} key={title}>
            <a className={s.link} href={link}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
