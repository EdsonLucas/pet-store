import styled from 'styled-components/native';
import { colors, fonts } from '~/styles/global';
import { Subtitle } from '~/styles/global/general';

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled(Subtitle)`
  font-family: ${fonts.LinotteBold};
  font-size: ${(props) => props.fontSize || 18}px;
  color: ${colors.brown};
  margin-top: ${(props) => props.marginTop || -28}px;
`;
