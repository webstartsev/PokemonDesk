import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.content}>This is App component!</div>
      <Footer />
    </div>
  );
};

export default HomePage;
