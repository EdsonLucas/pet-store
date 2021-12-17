import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import useUserStore from '~/store/user.store';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
  const { isAuthenticated, fetchLoading, isVisitant } = useUserStore();
  const [openModalCart, setOpenModalCart] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await fetchLoading();
    }

    fetchData();
  }, [isAuthenticated]);

  return (
    <NavigationContainer>
      {isAuthenticated || isVisitant ? (
        <>
          <AppRoutes />
        </>
      ) : (
        <AuthRoutes />
      )}
    </NavigationContainer>
  );
}
