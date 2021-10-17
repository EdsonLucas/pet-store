import React from 'react';
import { Container } from '~/styles/components/button/backbutton';

import ArrowLeft from '~/assets/icons/arrow-left.svg';

const BackButton = (props) => (
  <Container {...props}>
    <ArrowLeft />
  </Container>
);

export default BackButton;
