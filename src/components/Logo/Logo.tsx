import React from 'react';

import s from './Logo.module.scss';
import logo from '../../assets/img/Logo.svg';

const Logo = () => <img className={s.logo} src={logo} alt="Логотип Pokemon" />;

export default Logo;
