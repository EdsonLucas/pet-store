import React from 'react';

import { Container, TitleButton } from '~/styles/components/button/button';

function Button(props) {
  const { buttonColor, textColor, children } = props;

  return (
    <Container backgroundColor={buttonColor} {...props}>
      <TitleButton color={textColor}>{children}</TitleButton>
    </Container>
  );
}

export default Button;
