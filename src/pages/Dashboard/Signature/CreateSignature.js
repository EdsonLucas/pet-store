import React, { useState } from 'react';

function CreateSignature({ navigation }) {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  return (
    <>
      {/* {step === 0 && (
        <StoreSignature navigation={navigation} nextStep={nextStep} />
      )}
      {step === 1 && <Address prevStep={prevStep} nextStep={nextStep} />}
      {step === 2 && <ChoosePet navigation={navigation} prevStep={prevStep} />} */}
    </>
  );
}

export default CreateSignature;
