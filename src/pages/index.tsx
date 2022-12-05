import React, { useEffect } from 'react';

import Router from 'next/router';
import withAuth from '../libs/withAuth';
import { ROUTE_PRIVATE } from '../constant/route-constant';

const Index = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === '/') {
      Router.push(ROUTE_PRIVATE.HOME);
    }
  }, []);
  return <div />;
}

export default withAuth(Index);