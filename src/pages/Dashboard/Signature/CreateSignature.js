import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import Input from '~/components/Input/Input';
import ModalFull from '~/components/Modal/ModalFull';

import PeriodList from '~/data/period';

import useUserStore from '~/store/user.store';

function CreateSignature({ navigation, route }) {
  const [countProduct, setCountProduct] = useState(1);
  const [productModal, setProductModal] = useState(false);
  const [periodModal, setPeriodModal] = useState(false);
  const [periodity, setPeriodity] = useState('');

  const { fetchSignatures, fetchProducts } = useUserStore();

  const { cartProducts, totalPrice } = route.params;

  const onSubmit = async () => {
    await AsyncStorage.setItem('hasSignature', 'true');
    await fetchSignatures();

    navigation.navigate('Assinatura', { cartProducts, totalPrice });

    const jsonValue = JSON.stringify([]);
    await AsyncStorage.setItem('cartProducts', jsonValue);

    await fetchProducts();
  };

  return (
    <>
      <Container flex={0.01} backgroundColor={colors.gray} />
      <Content>
        <BackButton onPress={() => navigation.goBack()} />

        <Title
          style={{ paddingHorizontal: metrics.basePadding }}
          marginBottom={20}
        >
          Criar assinatura
        </Title>

        <BoxContainer showsVerticalScrollIndicator={false}>
          <Subtitle marginTop={10} color={colors.grayMedium}>
            Primeiro passo
          </Subtitle>
          <Text marginBottom={10}>
            Selecione o período para o recebimento de seus produtos e um apelido
            para sua assinatura, se você quiser
          </Text>

          <SelectButton
            onPress={() => setPeriodModal(true)}
            title='Selecionar Periodicidade'
            rightText={periodity.length === 0 ? 'Selecionar' : periodity}
          />

          <Input
            style={{ marginTop: 20 }}
            color={colors.white}
            placeholder='Nome da Assinatura'
          />

          <Subtitle marginTop={25} color={colors.grayMedium}>
            Segundo passo
          </Subtitle>
          <Text marginTop={5}>Selecione o endereço e a forma de pagamento</Text>

          <BoxItem style={{ marginTop: 20 }}>
            <AddressContainer
              onPress={() => navigation.navigate('address-page')}
            >
              <LeftContainer>
                <Location />

                <TextContainer>
                  <Text>Entregar em</Text>
                  <Text color={colors.black}>
                    Rua Treze de Maio, 12 - São Geraldo, Cariacica - ES
                  </Text>
                </TextContainer>
              </LeftContainer>

              <ArrowRight />
            </AddressContainer>
          </BoxItem>

          <BoxItem>
            <RowContainer>
              <CardIcon />
              <Subtitle marginLeft={15} color={colors.black}>
                Forma de pagamento
              </Subtitle>
            </RowContainer>

            <PaymentFormContainer
              onPress={() => navigation.navigate('payment-form')}
            >
              <Text>Pagar pelo app</Text>

              <RightPaymentContainer>
                <CreditCardIcon style={{ marginTop: 5 }} />
                <Text marginLeft={5} marginRight={20} color={colors.black}>
                  •••• 7525
                </Text>

                <ArrowRight />
              </RightPaymentContainer>
            </PaymentFormContainer>
          </BoxItem>

          <Subtitle marginTop={25} color={colors.grayMedium}>
            Terceiro passo
          </Subtitle>
          <Text marginTop={5}>
            Verifique os produtos adicionados para a sua assinatura
          </Text>

          <BoxItem style={{ marginTop: 20 }}>
            <RowContainer>
              <RecipIcon />
              <Subtitle marginLeft={15} color={colors.black}>
                Produtos no carrinho
              </Subtitle>
            </RowContainer>

            <RecipProducts>
              {cartProducts.map((item) => (
                <RecipProductItem
                  key={item.name + Math.random()}
                  onPress={() => setProductModal(true)}
                >
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
          </BoxItem>

          <BoxItem style={{ paddingBottom: 1 }}>
            <RowContainer>
              <Subtitle color={colors.black}>Pagamento</Subtitle>
            </RowContainer>

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
          </BoxItem>

          <Text marginTop={5}>
            A sua primeira assinatura será enviada dentro de aproximadamente 72
            horas.
          </Text>

          <Button onPress={() => onSubmit()} style={{ marginTop: 40 }}>
            Fechar assinatura
          </Button>

          <Spacer />
        </BoxContainer>
      </Content>

      {periodModal && (
        <ModalFull
          isOpen={periodModal}
          onClosed={() => setPeriodModal(false)}
          onRequestClose={() => setPeriodModal(false)}
        >
          <Title marginBottom={20}>Selecionar Periodicidade</Title>

          {PeriodList.map((item) => (
            <SelectButton
              key={Math.random()}
              title={`${item.period} dias`}
              onPress={() => {
                setPeriodity(`A cada ${item.period} dias`);
                setPeriodModal(false);
              }}
            />
          ))}

          <Spacer />
        </ModalFull>
      )}

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
    </>
  );
}

export default CreateSignature;
