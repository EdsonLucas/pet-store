import styled from 'styled-components/native';
import { colors, metrics } from '~/styles/global';
import { Text } from '~/styles/global/general';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0;
  border-bottom-width: 1.3px;
  border-color: rgba(0, 0, 0, 0.04);
`;

export const TextContainer = styled.View`
  width: 60%;
`;

export const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  width: 41%;
`;

export const Title = styled(Text)``;

export const Subtitle = styled(Text)``;

export const RightText = styled(Text)``;
