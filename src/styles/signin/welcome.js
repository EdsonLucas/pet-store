import styled from 'styled-components/native';
import { colors, metrics } from '~/styles/global';
import { Subtitle } from '~/styles/global/general';

export const Container = styled.View`
  flex: 1;
  background: ${colors.yellow};
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.View`
  justify-content: space-between;
  height: 185px;

  width: 100%;
  padding: ${metrics.basePadding}px;
`;

export const DogImage = styled.Image.attrs({
  source: require('~/assets/images/dog-main.png'),
})`
  align-self: center;
  width: 377px;
  height: 156px;
`;

export const SubtitleText = styled(Subtitle)`
  color: ${colors.brown};
  text-align: center;
  max-width: 70%;
`;
