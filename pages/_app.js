import React  from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/layout';
import { pageview } from '../lib/ga';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) { // eslint-disable-line no-unused-vars
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    this.props.router.events.on('routeChangeComplete', url => pageview(url));
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
