import styled from 'styled-components/native';
import { colors, metrics } from '~/styles/global';
import { Subtitle, Text } from '~/styles/global/general';

export const Content = styled.KeyboardAvoidingView`
  flex: 1;

  background-color: ${colors.gray};
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

export const BoxContainer = styled.ScrollView`
  padding: 0 ${metrics.basePadding}px;
`;

export const FilterItems = styled.ScrollView`
  margin-top: 20px;
  padding-bottom: 35px;
  padding-left: ${metrics.basePadding}px;
`;

export const FilterButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 55px;
  background-color: ${(props) => props.color || colors.white};
  margin-right: 15px;
  border-radius: 10px;
`;

export const BoxItem = styled.View`
  flex-direction: column;

  background-color: ${colors.white};
  padding: 20px 23px;
  margin: 10px 0;
  border-radius: ${metrics.baseRadius}px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
`;

export const AddressContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.View`
  flex-direction: column;

  width: 75%;
  margin-left: 10px;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
`;

export const BottomContainer = styled.View`
  background-color: ${colors.white};
  padding: 0 ${metrics.basePadding}px ${metrics.basePadding}px;
`;

export const DeliveryContainer = styled.View`
  align-items: center;

  margin-top: 20px;
  padding: 20px 0;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-top-color: #c3c6db40;
  border-bottom-color: #c3c6db40;
`;

export const HeaderDelivery = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  width: 80%;
`;

export const HeaderTextContainer = styled.View`
  margin-left: 13px;
`;

export const HeaderTitle = styled(Subtitle)`
  color: ${colors.black};
`;

export const HeaderText = styled(Subtitle)`
  color: ${colors.black};
  font-size: 15px;
`;

export const DeliveryBody = styled.View`
  flex-direction: row;

  margin-top: 20px;
`;

export const DeliveryColumn = styled.View`
  flex-direction: column;
  align-items: flex-start;

  margin-left: ${(props) => props.marginLeft || 25}px;
`;

export const RecipContainer = styled.View``;

export const RecipTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 20px;
`;

export const RecipProducts = styled.View`
  margin-top: 10px;
`;

export const RecipProductItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 2px;
  border-bottom-color: #c3c6db40;
  padding: 10px 0;
`;

export const ProductLeftContainer = styled.View`
  flex-direction: row;
  align-items: center;

  width: 70%;
`;

export const QuantityProduct = styled.View`
  border-radius: ${metrics.baseRadius}px;
  background-color: ${colors.gray};
  padding: 0.5px 4px;
  height: 22px;
  margin-right: 10px;
`;

export const ValueContainer = styled.View`
  padding: 15px 0;
`;

export const ValueItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 5px 0;
`;

export const PaymentFormContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  margin: 20px 0 0;
`;

export const RightPaymentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProductDetailsContainer = styled.View`
  align-items: center;
`;

export const PlusContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  border-bottom-width: 2px;
  border-bottom-color: #c3c6db30;
  margin-bottom: 20px;
  padding-bottom: 15px;
`;

export const CountItem = styled.View`
  align-self: center;

  width: 35px;
  margin-left: 20px;
  margin-right: 10px;
  padding: 4px 8px;
  background-color: #c3c6db50;
  border-radius: 7px;
`;

export const PlusButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  padding: 5px 9px;
  border: 1px;
  border-color: #c3c6db40;
  border-radius: 10px;
  margin-left: 10px;
`;

export const MinusButton = styled(PlusButton)``;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteContainer = styled.View`
  margin-right: 20px;
`;

export const DeleteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.red};
  padding: 15px 20px;
  border-radius: ${metrics.baseRadius}px;
`;

export const UpdateContainer = styled.View``;

export const UpdateButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.yellow};
  padding: 15px 20px;
  border-radius: ${metrics.baseRadius}px;
`;

export const PaymentModalTitleContainer = styled.View`
  padding-bottom: 20px;
  border-bottom-width: 2px;
  border-bottom-color: #c3c6db30;
`;

export const PaymentModalTitle = styled(Subtitle)`
  color: ${colors.black};
  margin-top: ${(props) => props.marginTop || 20}px;
`;
