import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  Content,
  BoxContainer,
  FakeBackground,
  ButtonContainer,
  DeliveryContainer,
  HeaderDelivery,
  HeaderTextContainer,
  HeaderTitle,
  HeaderText,
  DeliveryBody,
  DeliveryColumn,
  RecipContainer,
  RecipTitleContainer,
  RecipProducts,
  RecipProductTitle,
  RecipProductItem,
  ProductLeftContainer,
  QuantityProduct,
  ValueContainer,
  ValueItem,
  PaymentFormContainer,
  RightPaymentContainer,
  AddressContainer,
} from '~/styles/dashboard/orderplaced';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import DogOrder from '~/assets/images/dog-order.png';
import ClockIcon from '~/assets/icons/clock.svg';
import Okay from '~/assets/icons/okay-green.svg';
import OkayWait from '~/assets/icons/okay-gray.svg';
import Phone from '~/assets/icons/phone.svg';
import RecipIcon from '~/assets/icons/recip.svg';
import CreditCardIcon from '~/assets/icons/credit-card.svg';

import { colors, metrics } from '~/styles/global';

import BackButton from '~/components/Button/BackButton';
import Spacer from '~/components/Spacer';
import OutlineButton from '~/components/Button/OutlineButton';
import Button from '~/components/Button/Button';

function OrderPlaced({ navigation }) {
  const [countProduct, setCountProduct] = useState(1);

  return (
    <>
      <Container flex='0' backgroundColor={colors.gray} />
      <BackButton onPress={() => navigation.goBack()} />

      <Content>
        <Image
          style={{
            marginTop: -40,
            alignSelf: 'center',
            width: 110,
            height: 150,
            zIndex: 999,
          }}
          source={DogOrder}
        />

        <FakeBackground />
        <BoxContainer showsVerticalScrollIndicator={false}>
          <Title textAlign='center'>
            Obaaa! Seu pedido n˚ 3045 foi solicitado!
          </Title>

          <Text marginTop={10} textAlign='center'>
            Agora, falta muito pouco para você deixar o dia do seu pet mais
            feliz
          </Text>

          <DeliveryContainer>
            <HeaderDelivery>
              <ClockIcon />

              <HeaderTextContainer>
                <HeaderTitle>Previsão de entrega:</HeaderTitle>
                <HeaderText>14:30 - 14:40</HeaderText>
              </HeaderTextContainer>
            </HeaderDelivery>

            <DeliveryBody>
              <DeliveryColumn marginLeft={0.1}>
                <Okay />
                <Text marginTop={5} textAlign='left'>
                  Pedido {'\n'}solicitado
                </Text>
              </DeliveryColumn>

              <DeliveryColumn>
                <OkayWait />
                <Text marginTop={5} textAlign='left'>
                  Pedido {'\n'}separado
                </Text>
              </DeliveryColumn>

              <DeliveryColumn>
                <OkayWait />
                <Text marginTop={5} textAlign='left'>
                  Pedido {'\n'}à caminho
                </Text>
              </DeliveryColumn>
            </DeliveryBody>
          </DeliveryContainer>

          <ButtonContainer>
            <Button>Recebi meu pedido</Button>

            <OutlineButton
              style={{
                marginTop: 20,
              }}
            >
              <Phone /> Ligar para o pet shop
            </OutlineButton>
          </ButtonContainer>

          <RecipContainer>
            <RecipTitleContainer>
              <RecipIcon />
              <Subtitle marginLeft={10} color={colors.black}>
                Resumo do Pedido
              </Subtitle>
            </RecipTitleContainer>

            <RecipProducts>
              <RecipProductTitle>Pedido n˚ 3045</RecipProductTitle>
              <RecipProductItem>
                <ProductLeftContainer>
                  <QuantityProduct>
                    <Text color={colors.black}>1</Text>
                  </QuantityProduct>
                  <Text>Ração Golden 3kg para gatos, sabor carne</Text>
                </ProductLeftContainer>

                <Text color={colors.black}>R$ 49,59</Text>
              </RecipProductItem>

              <RecipProductItem>
                <ProductLeftContainer>
                  <QuantityProduct>
                    <Text color={colors.black}>1</Text>
                  </QuantityProduct>
                  <Text>Ração Golden 3kg para gatos, sabor carne</Text>
                </ProductLeftContainer>

                <Text color={colors.black}>R$ 49,59</Text>
              </RecipProductItem>
            </RecipProducts>

            <ValueContainer>
              <ValueItem>
                <Text>Subtotal</Text>

                <Text>R$115,49</Text>
              </ValueItem>

              <ValueItem>
                <Text>Taxa de entrega</Text>

                <Text>Entrega Grátis</Text>
              </ValueItem>

              <ValueItem>
                <Subtitle color={colors.black}>Total</Subtitle>

                <Subtitle color={colors.black}>R$115,49</Subtitle>
              </ValueItem>
            </ValueContainer>

            <PaymentFormContainer>
              <Text>Pago pelo app</Text>

              <RightPaymentContainer>
                <CreditCardIcon style={{ marginTop: 5 }} />
                <Text marginLeft={5} color={colors.black}>
                  •••• 5190
                </Text>
              </RightPaymentContainer>
            </PaymentFormContainer>

            <AddressContainer>
              <Text>Endereço de entrega</Text>

              <Text marginTop={5} color={colors.black}>
                Rua João das Garças, 120 - Campo Grande, Cariacica - ES
              </Text>
            </AddressContainer>

            <Spacer />
          </RecipContainer>
        </BoxContainer>
      </Content>
    </>
  );
}

export default OrderPlaced;
