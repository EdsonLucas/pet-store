import styled from 'styled-components/native';
import { metrics, colors } from '../global';
import { Text, Subtitle } from '~/styles/global/general';

export const Content = styled.ScrollView`
  padding: ${metrics.basePadding}px;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 32px;
`;

export const UserAvatar = styled.View`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '50'}px;
  height: ${(props) => props.height || '50'}px;
  border-top-left-radius: ${(props) => props.borderRadius || 10}px;
  border-top-right-radius: ${(props) => props.borderRadius || 10}px;
  border-bottom-left-radius: ${(props) => props.borderRadius || 10}px;
  border-bottom-right-radius: ${(props) => props.borderRadius || 10}px;
  background-color: ${colors.grayMedium};
  margin-right: 17px;
`;

export const UserTitle = styled(Subtitle)`
  color: ${colors.black};
  font-size: 18px;
  margin-top: 2px;
`;

export const CategoryContainer = styled.View`
  padding: 30px 0 14px 0;
  border-bottom-width: 1.3px;
  border-color: rgba(0, 0, 0, 0.04);
`;

export const CategoryTitle = styled(Text)`
  font-size: 15px;
  font-weight: 700;
  color: ${colors.grayMedium};
`;
