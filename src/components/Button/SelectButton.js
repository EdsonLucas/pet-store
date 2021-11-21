import React from 'react';
import {
  Container,
  TextContainer,
  RightContainer,
  Title,
  Subtitle,
  RightText,
} from '~/styles/components/button/selectbutton';

import ArrowRight from '~/assets/icons/arrow-right.svg';
import { colors } from '~/styles/global';

const SelectButton = (props) => {
  const {
    title,
    colorTitle,
    fontTitle,
    subtitle,
    hideRightText,
    rightText = 'Selecionar',
  } = props;

  return (
    <Container {...props}>
      <TextContainer>
        <Title color={colorTitle} style={{ fontSize: fontTitle }}>
          {title}
        </Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TextContainer>

      <RightContainer>
        {!hideRightText && <RightText marginRight={15}>{rightText}</RightText>}
        <ArrowRight />
      </RightContainer>
    </Container>
  );
};

export default SelectButton;
