import styled from 'styled-components/native';
import { colors, metrics } from '~/styles/global';
import { Subtitle } from '~/styles/global/general';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  background: ${(props) => props.backgroundColor || colors.blue};
  padding: 15px 0px;
  text-decoration: none;
  border-radius: ${metrics.baseRadius}px;
  text-align: center;
`;

export const TitleButton = styled(Subtitle)`
  text-align: center;
  font-size: 15px;
  color: ${(props) => props.color || colors.white};
`;
