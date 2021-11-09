import styled from 'styled-components/native';
import { metrics, colors } from '~/styles/global';

export const BoxContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 130px;
  padding: 20px 20px;
  border-radius: ${metrics.baseRadius}px;
  background-color: ${colors.white};
  border-width: 2px;
  border-color: ${(props) => props.borderColor || colors.transparent};
  box-shadow: ${(props) =>
    props.boxShadow
      ? `0px 6px 10px rgba(0, 0, 0, 0.07)`
      : `0px 0px 0px ${colors.transparent}`};
`;
