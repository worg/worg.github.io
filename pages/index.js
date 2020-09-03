import React from 'react';
import Quotes from '../components/quotes';

import s from './index.module.scss';

import logo from '../files/img/worg.svg';

const index = () => (
  <div className={s.container}>
    <img
      className={s.logo}
      alt='worg logo'
      title='logo'
      src={logo} />
    <Quotes className={s.quotes} />
  </div>
);

index.getInitialProps = () => ({
  full: true,
});

export default index;
