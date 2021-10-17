import styled from 'styled-components/native';
import { colors, metrics } from '../global';
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

export const Box = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 130px;
  padding: 20px 37px;
  border-radius: ${metrics.baseRadius}px;
  background-color: ${colors.white};
  border-width: 2px;
  border-color: ${(props) => props.borderColor || colors.transparent};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.07);
`;

export const SelectBox = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 100px;
  padding: 20px;
  border-radius: ${metrics.baseRadius}px;
  background-color: ${colors.white};
  margin-top: 15px;
  border-width: 2px;
  border-color: ${(props) => props.borderColor || colors.transparent};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.07);
`;

export const TextContainer = styled.View`
  align-items: flex-start;

  margin-left: 25px;
`;
