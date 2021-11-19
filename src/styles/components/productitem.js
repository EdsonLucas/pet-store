import styled from 'styled-components/native';
import { metrics, colors } from '~/styles/global';

export const BoxItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: ${(props) => props.width || 'auto'};
  background-color: ${colors.white};
  padding: 10px 23px;
  margin: 10px 0;
  border-radius: ${metrics.baseRadius}px;
  margin-left: ${(props) => props.marginLeft || 0}px;
`;

export const BackgroudImage = styled.View`
  padding: 15px 0;
`;

export const TextContainer = styled.View`
  margin-left: 20px;
  width: 73%;
`;

export const RowTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
