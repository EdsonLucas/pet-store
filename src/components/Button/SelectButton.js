import React from 'react';
import {
  Container,
  RightContainer,
} from '~/styles/components/button/selectbutton';
import { Text } from '~/styles/global/general';

import ArrowRight from '~/assets/icons/arrow-right.svg';

const SelecButton = (props) => {
  const { title } = props;

  return (
    <Container {...props}>
      <Text>{title}</Text>

      <RightContainer>
        <Text marginRight={15}>Selecionar</Text>
        <ArrowRight />
      </RightContainer>
    </Container>
  );
};

export default SelecButton;
