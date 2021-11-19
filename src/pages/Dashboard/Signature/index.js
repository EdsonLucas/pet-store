import React, { useState } from 'react';

import WelcomeSignature from './WelcomeSignature';
import SignaturePage from './SignaturePage';

const Signature = () => {
  const [userHasSignature, setUserHasSignature] = useState(true);

  return <>{!userHasSignature ? <SignaturePage /> : <WelcomeSignature />}</>;
};

export default Signature;
