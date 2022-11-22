import Head from 'next/head';
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import ApiContext from '../store/ApiContext';
import appReducers, { initialState } from '../store/reducers';

import '@styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import App from 'next/app';

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // const [user, setUser] = useState(null)
  // const [authorized, setAuthorized] = useState(false);

  // useEffect(() => {
  //   authCheck(router.asPath);

  //   const hideContent = () => setAuthorized(false);
  //   router.events.on('routeChangeStart', hideContent);

  //   router.events.on('routeChangeComplete', authCheck)

  //   return () => {
  //     router.events.off('routeChangeStart', hideContent);
  //     router.events.off('routeChangeComplete', authCheck);
  // }
  // }, [])

  // const authCheck = (url: String) => { 
  //   setUser(userService.userValue);
  //   const publicPaths = ['/account/login', '/account/register'];
  //   const path = url.split('?')[0];
  //   if (!userService.userValue && !publicPaths.includes(path)) {
  //       setAuthorized(false);
  //       router.push({
  //           pathname: '/account/login'
  //       });
  //   } else {
  //       setAuthorized(true);
  //   }
  // }

  return (
    <>
        <Head>
            <title>Fmt Web</title>
        </Head>
        <ApiContext reducer={appReducers} initialState={initialState}>
          <Component {...pageProps} />
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
