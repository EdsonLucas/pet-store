import styled from 'styled-components/native';
import Swipeable from 'react-native-swipeable';
import { colors, metrics } from '~/styles/global';
import { Subtitle } from '~/styles/global/general';

export const Content = styled.KeyboardAvoidingView`
  flex: 1;

  background-color: ${colors.gray};
`;

export const InputContainer = styled.View`
  margin-top: 18px;
  padding: 0 0 20px 0;
  border-bottom-width: 1.3px;
  border-color: rgba(0, 0, 0, 0.04);
`;

export const InputText = styled(Subtitle)`
  font-size: 13px;
`;

export const BoxContainer = styled.ScrollView`
  padding: 0 ${metrics.basePadding}px;
`;

export const FilterItems = styled.ScrollView`
  margin-top: 20px;
  padding-bottom: 35px;
  padding-left: ${metrics.basePadding}px;
`;

export const FilterButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 55px;
  background-color: ${(props) => props.color || colors.white};
  margin-right: 15px;
  border-radius: 10px;
`;

export const SwipeContainer = styled(Swipeable)``;

export const BoxItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  background-color: ${colors.white};
  padding: 10px 23px;
  border-radius: ${metrics.baseRadius}px;
`;

export const BackgroudImage = styled.View`
  padding: 15px 0;
`;

export const TextContainer = styled.View`
  flex-direction: column;

  width: 55%;
  margin-left: 20px;
`;

export const BottomContainer = styled.View`
  background-color: ${colors.white};
  padding: ${metrics.basePadding}px;
`;

export const PlusContainer = styled.View`
  align-items: center;
  justify-content: space-between;

  height: 80%;
  border-left-width: 2px;
  border-left-color: #c3c6db30;
  margin-left: 10px;
`;

export const CountItem = styled.View`
  margin-left: 10px;
  padding: 1px 8px;
  background-color: #c3c6db50;
  border-radius: 7px;
`;

export const PlusButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  padding: 5px 9px;
  border: 1px;
  border-color: #c3c6db40;
  border-radius: 10px;
  margin-left: 10px;
`;

export const MinusButton = styled(PlusButton)``;

export const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 95%;
  border-radius: 8px;
  margin-left: 30px;
  background-color: ${colors.red};
`;
