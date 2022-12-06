import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { AUTH_LOCAL_STORAGE_KEY } from '../constant/auth-constant';
import { LOGIN_CONSTANT } from '../store/reducers/authReducer';
import { getLocalStorage, registerLocalStorage } from './utility';
import { ROUTE_PRIVATE, ROUTE_PUBLIC } from '../constant/route-constant';
import { useApiContext } from '../store/ApiContext';

const withAuth = (WrappedComponent) => (props) => {
  const [state] = useApiContext();
  const Router = useRouter();
  const { auth: { authStatus } } = state;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ((authStatus && authStatus !== LOGIN_CONSTANT.LOGIN_SUCCESS) || !getLocalStorage(AUTH_LOCAL_STORAGE_KEY.JWT_TOKEN)) {
        if (authStatus !== LOGIN_CONSTANT.LOGIN_SUCCESS) {
          if (Router.asPath !== ROUTE_PRIVATE.LOGOUT) {
            registerLocalStorage(AUTH_LOCAL_STORAGE_KEY.REDIRECT, Router.asPath);
          }
        }

        Router.push(ROUTE_PUBLIC.LOGIN);
      }
    }
  }, [authStatus]);

  return authStatus && authStatus !== LOGIN_CONSTANT.LOGIN_SUCCESS ? null : <WrappedComponent {...props} />;
};

export default withAuth;
