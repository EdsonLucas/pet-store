import styled from 'styled-components/native';
import { colors, metrics } from '~/styles/global';
import { Header, Subtitle } from '~/styles/global/general';

export const HeaderContainer = styled(Header)`
  padding: 0 0 20px 0;
  border-bottom-width: 1.3px;
  border-color: rgba(0, 0, 0, 0.04);
  margin: 0 ${metrics.basePadding}px;
`;

export const BoxContainer = styled.ScrollView``;

export const Content = styled.View`
  padding: 0 ${metrics.basePadding}px;
`;

export const AccordionTitleContainer = styled.View`
  padding: 15px ${metrics.basePadding}px;
  background-color: ${colors.white};
  border-top-width: 2px;
  border-top-color: #c3c6db40;

  margin-top: 20px;
`;

export const AccordionTitle = styled(Subtitle)`
  color: ${colors.black};
`;

export const BoxItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  background-color: ${colors.white};
  padding: 10px ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius}px;
  border-top-width: 2px;
  border-top-color: #c3c6db40;
`;

export const BackgroudImage = styled.View`
  padding: 15px 0 10px;
  border-top-left-radius: ${metrics.baseRadius}px;
  border-top-right-radius: ${metrics.baseRadius}px;
`;

export const TextContainer = styled.View`
  margin-left: 15px;
`;
