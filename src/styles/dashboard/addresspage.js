import styled from 'styled-components/native';
import { metrics, colors } from '~/styles/global';
import { Header, Subtitle } from '~/styles/global/general';

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
  padding: 20px ${(props) => props.paddingHorizontal || metrics.basePadding}px;
`;

export const BoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${metrics.basePadding}px;
`;

export const BoxItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  border-width: 2px;
  border-color: ${(props) => props.borderColor || colors.transparent};
  background-color: ${colors.white};
  padding: 3px 23px 15px 23px;
  margin: 10px 0;
  border-radius: ${metrics.baseRadius}px;
`;

export const TextContainer = styled.View`
  margin-left: 15px;
`;

export const BackgroudImage = styled.View`
  background-color: ${(props) => props.color || colors.red};
  padding: 15px 0 10px;
  border-top-left-radius: ${metrics.baseRadius}px;
  border-top-right-radius: ${metrics.baseRadius}px;
`;
