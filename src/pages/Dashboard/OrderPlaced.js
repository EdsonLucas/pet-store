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

function OrderPlaced({ navigation, route }) {
  const { cartProducts, totalPrice } = route.params;

  return (
    <>
      <Container flex={0.01} backgroundColor={colors.gray} />
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
                <HeaderText>19:00 - 19:30</HeaderText>
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
              {cartProducts.map((item) => (
                <RecipProductItem>
                  <ProductLeftContainer>
                    <QuantityProduct>
                      <Text color={colors.black}>1</Text>
                    </QuantityProduct>
                    <Text style={{ maxWidth: '90%' }}>{item.name}</Text>
                  </ProductLeftContainer>

                  <Text color={colors.black}>R$ {item.price}</Text>
                </RecipProductItem>
              ))}
            </RecipProducts>

            <ValueContainer>
              <ValueItem>
                <Text>Subtotal</Text>

                <Text>R$ {totalPrice}</Text>
              </ValueItem>

              <ValueItem>
                <Text>Taxa de entrega</Text>

                <Text>Entrega Grátis</Text>
              </ValueItem>

              <ValueItem>
                <Subtitle color={colors.black}>Total</Subtitle>

                <Subtitle color={colors.black}>R$ {totalPrice}</Subtitle>
              </ValueItem>
            </ValueContainer>

            <PaymentFormContainer>
              <Text>Pago pelo app</Text>

              <RightPaymentContainer>
                <CreditCardIcon style={{ marginTop: 5 }} />
                <Text marginLeft={5} color={colors.black}>
                  •••• 7525
                </Text>
              </RightPaymentContainer>
            </PaymentFormContainer>

            <AddressContainer>
              <Text>Endereço de entrega</Text>

              <Text marginTop={5} color={colors.black}>
                Rua Treze de Maio, 12 - São Geraldo, Cariacica - ES
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
