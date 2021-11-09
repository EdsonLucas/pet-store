import styled from 'styled-components/native';
import { metrics, colors } from '~/styles/global';
import { Title } from '~/styles/global/general';

export const Content = styled.ScrollView`
  padding: ${metrics.basePadding}px;
`;

export const SearchTitle = styled(Title)`
  align-self: center;

  max-width: 250px;
  text-align: center;
  color: ${(props) => props.color || colors.black};
  margin-bottom: 30px;
`;

export const BoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: ${(props) => props.marginTop || 13}px
    ${(props) => props.marginRight || 0}px
    ${(props) => props.marginBottom || 13}px
    ${(props) => props.marginLeft || 0}px;
`;
