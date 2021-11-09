import React from 'react';
import {
  SelectBoxContainer,
  ImageContainer,
  TextContainer,
} from '~/styles/components/selectbox';
import { colors } from '~/styles/global';
import { Subtitle, Text } from '~/styles/global/general';

const SelectBox = (props) => {
  const { image, title, subtitle } = props;

  return (
    <SelectBoxContainer>
      <ImageContainer>{image}</ImageContainer>

      <TextContainer>
        <Subtitle color={colors.grayMedium}>{title}</Subtitle>
        <Text>{subtitle}</Text>
      </TextContainer>
    </SelectBoxContainer>
  );
};

export default SelectBox;
