import React from 'react';

import {
  Container,
  TitleButton,
} from '~/styles/components/button/outlinebutton';

function OutlineButton(props) {
  const { borderButtonColor, textColor, children } = props;

  return (
    <Container borderColor={borderButtonColor} {...props}>
      <TitleButton color={textColor}>{children}</TitleButton>
    </Container>
  );
}

export default OutlineButton;
