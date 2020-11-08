import React from 'react';
import { Link } from 'react-router-dom';

import s from './Menu.module.scss';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

export const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/',
  },
];

const Menu = () => {
  return (
    <nav className={s.root}>
      <ul className={s.list}>
        {MENU.map(({ id, value, link }) => (
          <li className={s.item} key={id}>
            <Link className={s.link} to={link}>
              {value}
            </Link>
          </li>
        ))}
      </ul>
      <div className={s.toggle}>
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
};

export default Menu;
