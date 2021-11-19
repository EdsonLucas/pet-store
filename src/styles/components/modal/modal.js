import styled from 'styled-components/native';
import Modal from 'react-native-modalbox';
import { colors, metrics } from '~/styles/global';

export const Container = styled(Modal)`
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: ${(p) => (p.paddingless ? '0' : metrics.basePadding)}px;
  padding-top: ${metrics.basePadding + 10}px;
`;

export const SwipeCloseArea = styled.View`
  position: absolute;
  background: ${colors.grayLight};
  height: 5px;
  width: 36px;
  left: ${metrics.screenWidth / 2 - 36 / 2}px;
  top: 8px;
  border-radius: 10px;
`;

export const Close = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  position: absolute;
  background: ${colors.gray};
  height: 29px;
  width: 29px;
  right: 15px;
  top: 15px;
  border-radius: 100px;
  z-index: 1;
`;

export const Body = styled.View``;
