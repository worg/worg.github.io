import React from 'react';
import App from 'next/app';
import Layout from '../components/layout';
import { pageview, SITE_ID } from '../lib/stats';

import '../styles/global.scss';

class MyApp extends App {
  componentDidMount() {
    this.props.router.events.on('routeChangeComplete', pageview);
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Layout
        title={pageProps.title}
        full={pageProps.full}
        pathName={router.pathname}
      >
        <Component {...pageProps} />
        <noscript>
          <img src={`https://stats.worg.xyz/ingress/${SITE_ID}/pixel.gif`} />
        </noscript>
        <script src={`https://stats.worg.xyz/ingress/${SITE_ID}/script.js`} />
      </Layout>
    );
  }
}

export default MyApp;
