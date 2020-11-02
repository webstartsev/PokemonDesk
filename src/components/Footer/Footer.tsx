import React from 'react';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.container}>
      <div className={s.wrap}>
        <span className={s.make}>
          Make with{' '}
          <span role="img" aria-label="emoji heart">
            ❤️
          </span>
        </span>
        <a className={s.link} href="/">
          Ours Team
        </a>
      </div>
    </footer>
  );
};

export default Footer;
