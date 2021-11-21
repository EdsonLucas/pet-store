import styled from 'styled-components/native';
import { metrics, colors } from '~/styles/global';
import { Header } from '~/styles/global/general';

export const ScrollView = styled.ScrollView``;

export const HeaderContainer = styled(Header)`
  padding: 0 0 20px 0;
  border-bottom-width: 1.3px;
  border-color: rgba(0, 0, 0, 0.04);
  margin: 0 ${metrics.basePadding}px;
`;

export const Content = styled.KeyboardAvoidingView`
  padding: 0 ${(props) => props.paddingHorizontal || metrics.basePadding}px;
`;
