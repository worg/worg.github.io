import React from 'react';
import Head from 'next/head';
import DynamicBg from './bg/dynamic';
import Nav from './nav';

import css from './layout.module.scss';

const Layout = ({
  children,
  title = 'Dreamer, Thinker, Lover & Coder',
  full = false,
  pathName,
}) => (
  <main className={full ? 'full' : undefined}>
    {full && <DynamicBg />}
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <title>{title}</title>
      <meta
        name='description'
        content='Hiram J. Pérez, worg full stack developer in mexico city'
      />
      <meta name='keywords' content='@worg, Hiram, Hiram J. Pérez, worg' />
      <meta name='theme-color' content='#1A1A1A' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <meta name='msapplication-TileColor' content='#1A1A1A' />
    </Head>
    <Nav full={full} pathName={pathName} />
    <div className={css.container}>{children}</div>
  </main>
);

export default Layout;
