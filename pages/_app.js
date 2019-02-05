import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/layout';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) { // eslint-disable-line no-unused-vars
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <Layout
          title={pageProps.title}
          full={pageProps.full}
          pathName={router.pathname} >
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
