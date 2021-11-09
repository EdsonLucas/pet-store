import styled from 'styled-components/native';
import { colors, metrics } from '~/styles/global';
import { Subtitle } from '~/styles/global/general';

export const Content = styled.KeyboardAvoidingView`
  padding: 0 ${(props) => props.padding || metrics.basePadding}px;
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
