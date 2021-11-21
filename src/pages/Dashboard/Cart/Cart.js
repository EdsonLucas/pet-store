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
  ProductDetailsContainer,
  PlusContainer,
  PlusButton,
  CountItem,
  MinusButton,
  Footer,
  DeleteContainer,
  DeleteButton,
  UpdateContainer,
  UpdateButton,
  PaymentModalTitleContainer,
  PaymentModalTitle,
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
import Modal from '~/components/Modal/Modal';
import SelectButton from '~/components/Button/SelectButton';

function Cart({ navigation }) {
  const [countProduct, setCountProduct] = useState(1);
  const [productModal, setProductModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);

  return (
    <>
      <Container flex={0.01} backgroundColor={colors.gray} />
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
            <AddressContainer
              onPress={() => navigation.navigate('address-page')}
            >
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
              <RecipProductItem onPress={() => setProductModal(true)}>
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
                Forma de pagamento
              </Subtitle>
            </RowContainer>

            <PaymentFormContainer onPress={() => setPaymentModal(true)}>
              <Text>Pagar pelo app</Text>

              <RightPaymentContainer>
                <CreditCardIcon style={{ marginTop: 5 }} />
                <Text marginLeft={5} marginRight={20} color={colors.black}>
                  •••• 5190
                </Text>

                <ArrowRight />
              </RightPaymentContainer>
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

      {productModal && (
        <Modal isOpen={productModal} onClosed={() => setProductModal(false)}>
          <Title marginBottom={70}>
            Ração Golden 3k para gatos, sabor carne
          </Title>

          <ProductDetailsContainer>
            <PlusContainer>
              <PlusButton onPress={() => setCountProduct(countProduct + 1)}>
                <Text style={{ fontSize: 20, marginTop: 6 }}> + </Text>
              </PlusButton>

              <CountItem>
                <Text textAlign='center' color={colors.black}>
                  {countProduct}
                </Text>
              </CountItem>

              <MinusButton
                onPress={() => setCountProduct(countProduct - 1 || 1)}
              >
                <Text style={{ fontSize: 20, marginTop: 6 }}> - </Text>
              </MinusButton>
            </PlusContainer>

            <Footer>
              <DeleteContainer>
                <DeleteButton>
                  <Text color={colors.white}>Remover item</Text>
                </DeleteButton>
              </DeleteContainer>

              <UpdateContainer>
                <UpdateButton>
                  <Text color={colors.white}>Atualizar</Text>

                  <Text marginLeft={40} color={colors.white}>
                    R$ 49,59
                  </Text>
                </UpdateButton>
              </UpdateContainer>
            </Footer>
          </ProductDetailsContainer>
          <Spacer height={20} />
        </Modal>
      )}

      {paymentModal && (
        <Modal isOpen={paymentModal} onClosed={() => setPaymentModal(false)}>
          <Title marginBottom={20}>Selecione a forma de pagamento</Title>

          <PaymentModalTitleContainer>
            <PaymentModalTitle marginTop={10}>Cartão</PaymentModalTitle>
          </PaymentModalTitleContainer>

          <SelectButton
            title='Pagar pelo app'
            onPress={() => [
              setPaymentModal(false),
              navigation.navigate('payment-form'),
            ]}
          />

          <SelectButton title='Pagar na entrega' onPress={() => {}} />

          <PaymentModalTitleContainer>
            <PaymentModalTitle>Dinheiro</PaymentModalTitle>
          </PaymentModalTitleContainer>

          <SelectButton title='Pagar na entrega' onPress={() => {}} />

          <Spacer height={20} />
        </Modal>
      )}
    </>
  );
}

export default Cart;
