import styled from 'styled-components/native';
import { metrics } from '../global';
import { Header, Subtitle } from '../global/general';

export const ScrollView = styled.ScrollView``;

export const HeaderContainer = styled(Header)`
  padding: 0 0 20px 0;
  border-bottom-width: 1.3px;
  border-color: rgba(0, 0, 0, 0.04);
  margin: 0 ${metrics.basePadding}px;
`;

export const Content = styled.KeyboardAvoidingView`
  padding: 0 ${metrics.basePadding}px;
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

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 20px ${metrics.basePadding}px;
`;

export const BoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${metrics.basePadding}px;
`;
