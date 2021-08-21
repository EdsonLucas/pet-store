import styled from 'styled-components/native';
import colors from './colors';
import metrics from './metrics';
import fonts from './fonts';

export const Container = styled.SafeAreaView`
  flex: ${(props) => props.flex || 1};
  background-color: ${(props) => props.color || colors.white};
`;

export const Header = styled.View`
  padding: ${(props) => props.padding || metrics.basePadding}px;
  background-color: ${(props) => props.backgroundColor || colors.white};
`;

const baseText = styled.Text`
  align-self: ${(props) => props.alignSelf || 'auto'};
  text-align: ${(props) => props.textAlign || 'auto'};

  letter-spacing: 0.4px;
  margin: ${(props) => props.marginTop || 0}px
    ${(props) => props.marginRight || 0}px
    ${(props) => props.marginBottom || 0}px
    ${(props) => props.marginLeft || 0}px;
`;

export const Title = styled(baseText)`
  font-family: ${(props) => props.fontFamily || fonts.helveticaBold};
  font-size: 22px;
  font-weight: 700;
  line-height: 26.4px;
  color: ${(props) => props.color || colors.black};
`;

export const Subtitle = styled(baseText)`
  font-family: ${(props) => props.fontFamily || fonts.helveticaBold};
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  color: ${(props) => props.color || colors.grayRegular};
`;

export const Text = styled(baseText)`
  font-family: ${(props) => props.fontFamily || fonts.helveticaMedium};
  font-size: 13px;
  font-weight: 500;
  line-height: 19.6px;
  color: ${(props) => props.color || colors.grayRegular};
`;

export const ErrorText = styled(baseText)`
  font-family: ${(props) => props.fontFamily || fonts.helveticaMedium};
  font-size: 13px;
  line-height: 19.6px;
  color: ${(props) => props.color || colors.danger};
`;
