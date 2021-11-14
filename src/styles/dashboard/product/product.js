import styled from 'styled-components/native';
import { colors, metrics } from '~/styles/global';
import { Subtitle } from '~/styles/global/general';

export const BoxContainer = styled.ScrollView`
  background-color: ${colors.gray};
`;

export const Content = styled.KeyboardAvoidingView``;

export const Header = styled.View`
  background-color: ${colors.white};
`;

export const HeaderProduct = styled.View`
  flex-direction: column;

  padding: 0 ${metrics.basePadding}px 20px;
  background-color: ${colors.white};
`;

export const BoxItem = styled.View`
  align-items: flex-start;

  background-color: ${colors.white};
  padding: 23px ${(props) => props.paddingHorizontal || 23}px;
  margin: ${(props) => props.marginTop || 10}px
    ${(props) => props.marginRight || 0}px
    ${(props) => props.marginBottom || 10}px
    ${(props) => props.marginLeft || 0}px;
`;

export const BackgroudImage = styled.View`
  padding: 15px 0;
  background-color: ${colors.white};
`;

export const TextContainer = styled.View`
  align-items: center;

  margin-left: 20px;
`;

export const RowTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  border-bottom-width: 2px;
  border-bottom-color: #c3c6db40;
  padding: 13px 0px;
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
  padding: 0 ${metrics.basePadding}px;
`;
