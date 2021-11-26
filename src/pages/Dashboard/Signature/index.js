import React, { useState } from 'react';

import WelcomeSignature from './WelcomeSignature';
import SignaturePage from './SignaturePage';

const Signature = ({ navigation }) => {
  const [userHasSignature, setUserHasSignature] = useState(true);

  return (
    <>
      {userHasSignature ? (
        <SignaturePage navigation={navigation} />
      ) : (
        <WelcomeSignature navigation={navigation} />
      )}
    </>
  );
};

export default Signature;
