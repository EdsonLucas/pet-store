import styled from 'styled-components/native';
import { colors, metrics } from '~/styles/global';
import { Subtitle, Title, Text } from '../global/general';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${colors.white};
`;

export const Food = styled.Image`
  position: absolute;
  width: 120px;
  height: 131px;
  left: 0px;
  top: ${metrics.heightPercentageToDP(8)}px;
`;

export const Header = styled.View`
  flex: 0.6;

  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Food2 = styled.Image`
  position: absolute;
  width: 120px;
  height: 161px;
  right: 0;
  top: 0;
`;

export const Content = styled.View`
  flex: 1;

  width: 100%;
  padding: ${metrics.basePadding}px;
`;

export const InputContainer = styled.View`
  margin-bottom: ${(props) => props.marginBottom || 25}px;
`;

export const LastContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 20px 0px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width || 100}%;
  background: ${(props) => props.backgroundColor || colors.blue};
  padding: 10px;
  margin: 5px 0px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;
`;

export const TitleText = styled(Title)`
  font-size: 20px;
  margin-bottom: -10px;
  color: ${colors.brown};
`;

export const InputText = styled(Subtitle)`
  font-size: 13px;
`;

export const SimpleText = styled(Text)`
  color: ${colors.grayRegular};
  text-align: center;
`;

export const ForgotContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;
