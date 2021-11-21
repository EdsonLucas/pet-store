import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { colors, metrics } from '~/styles/global';
import { Subtitle } from '~/styles/global/general';

import PetBanner from '~/assets/images/pet-banner.jpg';

export const Header = styled.View`
  background-color: ${colors.white};
  padding: 0 0 ${metrics.basePadding}px;
  border-bottom-width: 8px;
  border-bottom-color: #c3c6db40;
`;

export const BackContainer = styled.ImageBackground.attrs({
  source: PetBanner,
  resizeMode: 'cover',
})`
  min-height: 120px;
  justify-content: flex-end;
`;

export const BackButtonContainer = styled.View`
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  background-color: ${colors.white};
  border-radius: 50px;
  margin-left: ${metrics.basePadding}px;
  margin-bottom: ${Platform.OS === 'android' ? 15 : 10}%;
`;

export const StoreContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${metrics.basePadding}px ${metrics.basePadding}px 0;
`;

export const TextStoreContainer = styled.View`
  flex-direction: column;
`;

export const AccordionTitleContainer = styled.View`
  padding: 15px ${metrics.basePadding}px;
  background-color: ${colors.white};
  border-top-width: 2px;
  border-top-color: #c3c6db40;
`;

export const AccordionTitle = styled(Subtitle)`
  color: ${colors.black};
`;

export const BoxContainer = styled.ScrollView`
  background-color: ${colors.white};
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
  padding: 15px 0;
`;

export const TextContainer = styled.View`
  margin-left: 20px;
  width: 60%;
`;
