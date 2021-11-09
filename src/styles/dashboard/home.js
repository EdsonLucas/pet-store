import styled from 'styled-components/native';
import { metrics, colors } from '../global';
import { Title, Subtitle, Text } from '~/styles/global/general';

import Cat from '~/assets/images/cat-banner.png';

export const Content = styled.ScrollView``;

export const Location = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: ${metrics.basePadding}px;
`;

export const LocationSubtitle = styled(Text)`
  font-size: 16px;
`;

export const LocationTitle = styled(Title)`
  font-size: 20px;
`;

export const Banner = styled.ScrollView`
  padding: 0 ${metrics.basePadding}px ${metrics.basePadding}px;
`;

export const BannerItem = styled.View`
  align-items: flex-start;

  position: relative;
  background-color: #006f81;
  width: 330px;
  height: 203px;
  border-radius: ${metrics.baseRadius}px;
  padding: 36px 30px 15px 30px;
  margin-right: 30px;
`;

export const CatImage = styled.Image.attrs({
  source: Cat,
  resizeMode: 'cover',
})`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 90px;
  height: 82px;
`;

export const ForYouContainer = styled.View``;

export const ForYouHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 ${metrics.basePadding}px;
`;

export const ForYouContent = styled.ScrollView`
  margin-top: 15px;

  padding: 0 ${metrics.basePadding}px;
`;

export const ForYouItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 180px;
  background-color: ${colors.transparent};
  margin-right: 30px;
`;

export const FakeItemBackground = styled.View`
  background-color: ${colors.white};
`;

export const FavoritesContainer = styled.View``;

export const Favorites = styled.ScrollView`
  padding: 0 ${metrics.basePadding}px;
`;

export const StoreContainer = styled.View`
  padding: ${metrics.basePadding}px;
`;

export const StoreItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 13px 0;
`;

export const StoreImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BackgroudImage = styled.View`
  background-color: ${(props) => props.color || colors.red};
  padding: 15px 0 10px;
  border-top-left-radius: ${metrics.baseRadius}px;
  border-top-right-radius: ${metrics.baseRadius}px;
`;

export const ForYouTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 5px;
`;

export const Footer = styled.View`
  padding: 0px 17px 15px;
  background-color: ${colors.white};
  border-bottom-left-radius: ${metrics.baseRadius}px;
  border-bottom-right-radius: ${metrics.baseRadius}px;
`;

export const TextContainer = styled.View`
  margin-left: 15px;
`;

export const StoreTitle = styled(Title)`
  font-size: 18px;
`;

export const StoreDescription = styled(Text)`
  margin-top: -3px;
`;

export const StoreShipping = styled(Text)`
  margin-top: 10px;
  color: ${colors.green};
`;

export const AddFavorite = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;

export const TitleCards = styled(Title)`
  font-size: 20px;
`;
