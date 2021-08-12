import styled from 'styled-components/native';
import colors from './colors';
import metrics from './metrics';
// import fonts from './fonts';

export const Container = styled.SafeAreaView`
  flex: ${(props) => props.flex || 1};
  background-color: ${colors.whiteLight};
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
    ${(props) => props.marginRight || 0}px ${(props) => props.marginBottom || 0}px
    ${(props) => props.marginLeft || 0}px;
`;

export const Title = styled(baseText)`
  font-family: ${fonts.helveticaBold};
  font-size: 22px;
  color: ${colors.black};
`;

export const Subtitle = styled(baseText)`
  font-family: ${fonts.helveticaBold};
  font-size: 17px;
  color: ${colors.grayRegular};
`;

export const Text = styled(baseText)`
  font-family:${fonts.helveticaMedium};
  font-size: 13px;
  color: ${colors.grayRegular};
`;

export const ErrorText = styled(baseText)`
  font-family:${fonts.helveticaMedium};
  font-size: 13px;
  color: ${colors.danger};
`;
