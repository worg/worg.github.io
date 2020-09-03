import React from 'react';
import App from 'next/app';
import Layout from '../components/layout';
import { pageview } from '../lib/ga';

import '../styles/global.scss';

class MyApp extends App {
  componentDidMount() {
    this.props.router.events.on('routeChangeComplete', url => pageview(url));
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Layout
        title={pageProps.title}
        full={pageProps.full}
        pathName={router.pathname} >
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
