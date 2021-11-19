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
