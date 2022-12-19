import Head from 'next/head'
import type { AppProps } from 'next/app'
import Model from 'src/components/Modal'
import { SSRProvider } from 'react-bootstrap'
import AppWrapper from '../store/ApiContext'
import appReducers, { initialState } from '../store/reducers'

import '@styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Init from '../libs/init'
import { Loading } from '../components/core/loading/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>VolkSpace Web</title>
      </Head>
      <AppWrapper reducer={appReducers} initialState={initialState}>
        <Init />
        <SSRProvider>
          <Component {...pageProps} />
          <Loading />
          <Model />
        </SSRProvider>
      </AppWrapper>
    </>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

export default MyApp
