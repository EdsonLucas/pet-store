import styled from 'styled-components/native';
import { metrics, colors } from '../global';

export const Content = styled.ScrollView`
  padding: ${metrics.basePadding}px;
`;

export const DateContainer = styled.View`
  margin-top: 32px;
`;

export const HistoryBox = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${colors.white};
  padding: 14px 15px;
  margin: 15px 0;
  border-radius: ${metrics.baseRadius}px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 0 11px 0;
  border-bottom-width: 1.5px;
  border-color: rgba(0, 0, 0, 0.04);
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled.View`
  margin-left: 15px;
`;

export const OrderContainer = styled.View`
  border-bottom-width: 1.5px;
  border-color: rgba(0, 0, 0, 0.04);
`;

export const OrderStatus = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-top: 14px;
`;

export const OrderItem = styled.View`
  flex-direction: row;

  padding: ${(props) => props.paddingTop || 20}px 0
    ${(props) => props.paddingBottom || 17}px 0;
`;

export const QuantityItem = styled.View`
  border-radius: ${metrics.baseRadius}px;
  background-color: ${colors.gray};
  padding: 0.5px 4px;
  height: 22px;
`;

export const FooterContainer = styled.View`
  margin-top: 15px;
  align-items: center;
`;
