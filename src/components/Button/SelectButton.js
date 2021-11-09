import React from 'react';
import {
  Container,
  TextContainer,
  RightContainer,
} from '~/styles/components/button/selectbutton';
import { Text } from '~/styles/global/general';

import ArrowRight from '~/assets/icons/arrow-right.svg';
import { colors } from '~/styles/global';

const SelecButton = (props) => {
  const { title, colorTitle, fontTitle, subtitle, hideRightText } = props;

  return (
    <Container {...props}>
      <TextContainer>
        <Text color={colorTitle} style={{ fontSize: fontTitle }}>
          {title}
        </Text>
        {subtitle && <Text>{subtitle}</Text>}
      </TextContainer>

      <RightContainer>
        {!hideRightText && <Text marginRight={15}>Selecionar</Text>}
        <ArrowRight />
      </RightContainer>
    </Container>
  );
};

export default SelecButton;
