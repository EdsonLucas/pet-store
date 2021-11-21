import styled from 'styled-components/native';
import { colors, metrics } from '~/styles/global';
import { Title, Subtitle } from '~/styles/global/general';

import BannerPic from '~/assets/images/signature-banner.png';

export const Content = styled.View`
  padding: 0 ${metrics.basePadding}px;
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
  background-color: ${colors.gray};
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

export const Banner = styled.ScrollView`
  padding: 0 ${metrics.basePadding}px ${metrics.basePadding}px;
`;

export const BannerItem = styled.View`
  align-items: flex-start;

  position: relative;
  background-color: ${colors.blue};
  width: 330px;
  height: 203px;
  border-radius: ${metrics.baseRadius}px;
  padding: 36px 30px 15px 23px;
  margin-right: 30px;
`;

export const SignatureBanner = styled.Image.attrs({
  source: BannerPic,
  resizeMode: 'cover',
})`
  position: absolute;
  right: 10px;
  bottom: 5px;
  width: 190px;
  height: 170px;
`;

export const FavoritesContainer = styled.View`
  margin-bottom: ${metrics.basePadding}px;
`;

export const Favorites = styled.ScrollView`
  padding: 0 ${metrics.basePadding}px;
`;
export const TitleCards = styled(Title)`
  font-size: 20px;
`;
