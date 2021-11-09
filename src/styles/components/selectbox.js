import styled from 'styled-components/native';
import { metrics, colors } from '../global';

export const SelectBoxContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 100px;
  padding: 20px;
  border-radius: ${metrics.baseRadius}px;
  background-color: ${colors.white};
  margin-top: 15px;
  border-width: 2px;
  border-color: ${(props) => props.borderColor || colors.transparent};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.07);
`;

export const ImageContainer = styled.View`
  width: 60px;
`;

export const TextContainer = styled.View`
  align-items: flex-start;

  margin-left: 20px;
`;
