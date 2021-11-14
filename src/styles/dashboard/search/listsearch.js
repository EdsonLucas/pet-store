import styled from 'styled-components/native';
import { metrics, colors } from '~/styles/global';
import { Title, Subtitle, Text } from '~/styles/global/general';

export const Content = styled.KeyboardAvoidingView`
  padding: 0 ${(props) => props.padding || metrics.basePadding}px;
`;

export const BoxContainer = styled.ScrollView`
  padding: 0 ${metrics.basePadding}px;
`;

export const BoxItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  background-color: ${colors.white};
  padding: 10px 23px;
  margin: 10px 0;
  border-radius: ${metrics.baseRadius}px;
`;

export const BackgroudImage = styled.View`
  padding: 15px 0;
`;

export const TextContainer = styled.View`
  margin-left: 20px;
`;

export const RowTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StoreItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.white};
  padding: 10px 23px;
  border-radius: ${metrics.baseRadius}px;
  margin: 5px 0;
`;

export const StoreImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
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