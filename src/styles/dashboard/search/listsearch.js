import styled from 'styled-components/native';
import { metrics, colors } from '~/styles/global';
import { Title, Subtitle, Text } from '~/styles/global/general';

export const Content = styled.KeyboardAvoidingView`
  padding: 0 ${(props) => props.padding || metrics.basePadding}px;
`;

export const FilterContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.white};
  margin-top: 10px;
  padding: 10px;
  width: 35%;
  border-radius: ${metrics.baseRadius}px;
`;

export const BoxContainer = styled.ScrollView`
  padding: 0 ${metrics.basePadding}px;
`;

export const TextContainer = styled.View`
  margin-left: 20px;
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

export const FilterModalContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 30px;
  margin-bottom: 30px;
`;

export const FilterItem = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const FilterIconContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;
  border-width: 1.5px;
  background-color: ${(props) => props.backgroundColor || colors.white};
  border-color: ${(props) => props.borderColor || colors.grayRegular};
  border-radius: 50px;
  margin-bottom: 10px;
`;
