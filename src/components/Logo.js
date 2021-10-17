import React from 'react';
import { metrics } from '~/styles/global';

import { LogoContainer, LogoText } from '~/styles/components/logo';

import PetStorelogo from '~/assets/images/logo-main.svg';

const Logo = (props) => {
  const { width, height, fontSize, marginTitleTop } = props;

  return (
    <LogoContainer>
      <PetStorelogo
        width={metrics.widthPercentageToDP(width)}
        height={metrics.heightPercentageToDP(height)}
      />
      <LogoText fontSize={fontSize} marginTop={marginTitleTop}>
        PET STORE
      </LogoText>
    </LogoContainer>
  );
};

export default Logo;
