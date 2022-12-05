import App from 'next/app';
import Head from 'next/head';
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import ApiContext from '../store/ApiContext';
import appReducers, { initialState } from '../store/reducers';

import '@styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Init from '../libs/init';
import { Loading } from 'src/components/core/loading';
import { SSRProvider } from 'react-bootstrap';

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
            <title>VolkSpace Web</title>
        </Head>
        <ApiContext reducer={appReducers} initialState={initialState}>
          <Init children={undefined} />
          <SSRProvider> 
            <Component {...pageProps} />
          </SSRProvider>
          <Loading />
        </ApiContext>
    </>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp
