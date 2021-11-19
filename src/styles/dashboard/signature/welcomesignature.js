import styled from 'styled-components/native';
import { colors, metrics } from '~/styles/global';
import { Subtitle } from '~/styles/global/general';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${colors.yellow};
`;

export const Content = styled.View``;

export const Header = styled.View`
  align-items: center;

  margin: 50px 0 60px;
`;

export const ButtonContainer = styled.View`
  justify-content: space-between;

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
  margin: 70px 0 50px;
  color: ${colors.brown};
  text-align: center;
  max-width: 70%;
`;

export const AdvantageContainer = styled.View`
  align-items: center;

  padding: 20px 23px;
  height: 200px;
  background-color: ${colors.white};
`;

export const FoodContainer = styled.View`
  align-items: center;
  justify-content: center;

  background-color: ${colors.transparent};
  margin-top: -100px;
  margin-bottom: 80px;
`;

export const HowItWorksContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 50px;
`;

export const HowItWorksItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 13px 0;
`;
