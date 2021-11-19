import styled from 'styled-components/native';
import { Modal } from 'react-native';
import { colors, metrics } from '~/styles/global';

export const Container = styled(Modal)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: ${metrics.basePadding}px;
  padding-top: ${metrics.basePadding + 10}px;
`;

export const CloseArea = styled.View`
  position: relative;
  height: 42px;
  width: 42px;
  align-self: flex-end;
`;

export const Close = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  background: ${colors.gray};
  height: 29px;
  width: 29px;
  right: 15px;
  top: 15px;
  border-radius: 100px;
`;

export const Body = styled.ScrollView`
  padding: ${metrics.basePadding}px;
  padding-top: ${metrics.basePadding + 10}px;
`;
