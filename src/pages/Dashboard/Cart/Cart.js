import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  Content,
  BoxContainer,
  BoxItem,
  RowContainer,
  TextContainer,
  AddressContainer,
  LeftContainer,
  BottomContainer,
  ValueContainer,
  ValueItem,
  RecipProducts,
  RecipProductItem,
  ProductLeftContainer,
  QuantityProduct,
  PaymentFormContainer,
  RightPaymentContainer,
} from '~/styles/dashboard/cart/cart';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import CreditCardIcon from '~/assets/icons/credit-card.svg';
import Location from '~/assets/icons/location.svg';
import ArrowRight from '~/assets/icons/arrow-right.svg';
import RecipIcon from '~/assets/icons/recip.svg';
import CardIcon from '~/assets/icons/card.svg';

import { colors, metrics } from '~/styles/global';

import BackButton from '~/components/Button/BackButton';
import Spacer from '~/components/Spacer';
import Button from '~/components/Button/Button';

function Cart({ navigation }) {
  const [countProduct, setCountProduct] = useState(1);

  return (
    <>
      <Container flex='0' backgroundColor={colors.gray} />
      <Content>
        <BackButton onPress={() => navigation.goBack()} />

        <Title
          style={{ paddingHorizontal: metrics.basePadding }}
          marginBottom={20}
        >
          Carrinho
        </Title>

        <BoxContainer showsVerticalScrollIndicator={false}>
          <BoxItem>
            <AddressContainer>
              <LeftContainer>
                <Location />

                <TextContainer>
                  <Text>Entregar em</Text>
                  <Text color={colors.black}>
                    Rua João das Garças, 120 Campo Grande, Cariacica - ES
                  </Text>
                </TextContainer>
              </LeftContainer>

              <ArrowRight />
            </AddressContainer>
          </BoxItem>

          <BoxItem>
            <RowContainer>
              <RecipIcon />
              <Subtitle marginLeft={15} color={colors.black}>
                Produtos no carrinho
              </Subtitle>
            </RowContainer>

            <RecipProducts>
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
          </BoxItem>

          <BoxItem>
            <RowContainer>
              <CardIcon />
              <Subtitle marginLeft={15} color={colors.black}>
                Formas de pagamento
              </Subtitle>
            </RowContainer>

            <PaymentFormContainer>
              <Text>Pago pelo app</Text>

              <RightPaymentContainer>
                <CreditCardIcon style={{ marginTop: 5 }} />
                <Text marginLeft={5} marginRight={20} color={colors.black}>
                  •••• 5190
                </Text>

                <ArrowRight />
              </RightPaymentContainer>
            </PaymentFormContainer>

            <PaymentFormContainer>
              <Text>Pagamento na entrega</Text>

              <ArrowRight />
            </PaymentFormContainer>
          </BoxItem>

          <Spacer height={20} />
        </BoxContainer>

        <BottomContainer>
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

          <Button style={{ marginBottom: 10 }}>Fechar pedido</Button>
        </BottomContainer>
      </Content>
    </>
  );
}

export default Cart;
