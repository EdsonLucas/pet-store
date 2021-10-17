import styled from 'styled-components/native';
import { colors } from '~/styles/global';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
  width: 80px;
  padding: 10px;
  background-color: ${colors.transparent};
  margin-top: 11px;
  padding-left: 30px;
  margin-bottom: 20px;
`;
