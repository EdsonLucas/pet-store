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

export const FakeBackground = styled.View`
  margin: -30px ${metrics.basePadding}px 0;
  height: 40px;
  border-top-left-radius: ${metrics.baseRadius};
  border-top-right-radius: ${metrics.baseRadius};
  background-color: ${colors.white};
`;

export const BoxContainer = styled.ScrollView`
  margin: 0px ${metrics.basePadding}px 0;
  padding: 0 20px;
  background-color: ${colors.white};
`;

export const ButtonContainer = styled.View`
  padding: 25px 0 30px;
  border-bottom-width: 2px;
  border-bottom-color: #c3c6db40;
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
  margin-top: 30px;
`;

export const RecipProductTitle = styled(Text)`
  border-bottom-width: 2px;
  border-bottom-color: #c3c6db40;
  padding-bottom: 5px;
`;

export const RecipProductItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-top-width: 2px;
  border-top-color: #c3c6db40;
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
  border-top-width: 2px;
  border-top-color: #c3c6db40;

  padding: 20px 0 15px;
`;

export const ValueItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 5px 0;
`;

export const PaymentFormContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  border-top-width: 2px;
  border-bottom-width: 2px;
  border-top-color: #c3c6db40;
  border-bottom-color: #c3c6db40;
  padding: 5px 0 10px;
`;

export const RightPaymentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AddressContainer = styled.View`
  max-width: 60%;

  margin-top: 5px;
`;
