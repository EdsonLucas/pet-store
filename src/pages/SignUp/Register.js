import React, { useState } from 'react';

import PersonalData from './Steps/1.PersonalData';
import Address from './Steps/2.Address';
import ChoosePet from './Steps/3.ChoosePet';

function Register({ navigation }) {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  return (
    <>
      {step === 0 && (
        <PersonalData navigation={navigation} nextStep={nextStep} />
      )}
      {step === 1 && <Address prevStep={prevStep} nextStep={nextStep} />}
      {step === 2 && <ChoosePet navigation={navigation} prevStep={prevStep} />}
    </>
  );
}

export default Register;
