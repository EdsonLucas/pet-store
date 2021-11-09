import React, { useState } from 'react';
// import { useUserStore } from '~/store';

import { Container } from '~/styles/global/general';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
  // const { authenticated, fetchIsAuthenticated } = useUserStore();

  // useEffect(() => {
  //   fetchIsAuthenticated();
  // }, []);

  const [authenticated, setAuthenticated] = useState(false);

  return <>{!authenticated ? <AppRoutes /> : <AuthRoutes />}</>;
}
