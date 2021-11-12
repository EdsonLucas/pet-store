import styled from 'styled-components/native';
import { colors, metrics } from '~/styles/global';
import { Subtitle } from '~/styles/global/general';

export const BoxContainer = styled.ScrollView`
  background-color: ${colors.gray};
`;

export const Content = styled.KeyboardAvoidingView`
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
