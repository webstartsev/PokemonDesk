import React from 'react';

import s from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={s.root}>
      <div className={s.loader}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default React.memo(Loader);
