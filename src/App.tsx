import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import s from './App.module.scss';

const App: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.content}>This is App component!</div>
      <Footer />
    </div>
  );
};

export default App;
