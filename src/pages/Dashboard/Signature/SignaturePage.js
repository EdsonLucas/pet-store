import React, { useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Content,
  DateContainer,
  HistoryBox,
  HeaderContainer,
  LogoContainer,
  TextContainer,
  OrderContainer,
  OrderStatus,
  OrderItem,
  QuantityItem,
  FooterContainer,
  ButtonContainer,
} from '~/styles/dashboard/orders';
import { colors } from '~/styles/global';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import ArrowRight from '~/assets/icons/arrow-right.svg';
import ConfirmIcon from '~/assets/icons/confirm.svg';
import CatFoodLogo from '~/assets/images/cat-food-logo.png';
import ToysStoreLogo from '~/assets/images/toys-store-logo.png';

import Spacer from '~/components/Spacer';
import OutlineButton from '~/components/Button/OutlineButton';

import useUserStore from '~/store/user.store';

function SignaturePage({ navigation, route }) {
  const { fetchProducts } = useUserStore();

  const { cartProducts, totalPrice } = route.params;

  useEffect(async () => {
    await AsyncStorage.removeItem('cartProducts');
    await fetchProducts();
  }, []);

  return (
    <Container backgroundColor={colors.gray}>
      <Content showsVerticalScrollIndicator={false}>
        <Title marginBottom={20}>Assinatura</Title>

        <HistoryBox
          onPress={() =>
            navigation.navigate('signature-details', {
              cartProducts,
              totalPrice,
            })
          }
        >
          <HeaderContainer>
            <TextContainer marginLeft={5}>
              <Subtitle color={colors.black}>Minha assinatura</Subtitle>
              <Subtitle style={{ fontSize: 15 }}>
                Próxima entrega para o dia 02
              </Subtitle>
            </TextContainer>

            <ArrowRight />
          </HeaderContainer>

          <View style={{ marginBottom: 20 }} />

          <OrderContainer>
            {cartProducts.map((item) => (
              <OrderItem key={item.name + Math.random()}>
                <QuantityItem>
                  <Text style={{ color: colors.black }}>1</Text>
                </QuantityItem>

                <Text marginLeft={10} style={{ maxWidth: 280 }}>
                  {item.name}
                </Text>
              </OrderItem>
            ))}
          </OrderContainer>

          <FooterContainer>
            <Text style={{ color: colors.yellow }}>Mais detalhes</Text>
          </FooterContainer>
        </HistoryBox>

        <Spacer />
      </Content>

      <ButtonContainer>
        <OutlineButton
          style={{ marginBottom: 10 }}
          onPress={() =>
            navigation.navigate('cart-visible-pages', {
              screen: 'store-signature',
            })
          }
        >
          Criar nova assinatura
        </OutlineButton>
      </ButtonContainer>
    </Container>
  );
}

export default SignaturePage;
