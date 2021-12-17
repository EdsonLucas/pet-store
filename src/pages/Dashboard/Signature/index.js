import React, { useEffect, useState } from 'react';

import WelcomeSignature from './WelcomeSignature';
import SignaturePage from './SignaturePage';

import useUserStore from '~/store/user.store';

const Signature = ({ navigation, route }) => {
  const { hasSignature } = useUserStore();

  return (
    <>
      {hasSignature ? (
        <SignaturePage navigation={navigation} route={route} />
      ) : (
        <WelcomeSignature navigation={navigation} />
      )}
    </>
  );
};

export default Signature;
