import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import s from './Menu.module.scss';
import { GENERAL_MENU } from '../../routes';

const Menu = () => {
  const path = usePath();

  return (
    <nav className={s.root}>
      <ul className={s.list}>
        {GENERAL_MENU.map(({ title, link }) => (
          <li className={cn(s.item, { [s.activeItem]: link === path })} key={title}>
            <A className={s.link} href={link}>
              {title}
            </A>
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

export default React.memo(Menu);
