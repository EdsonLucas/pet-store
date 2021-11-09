import React from 'react';
import { Image } from 'react-native';
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
} from '~/styles/dashboard/orders';
import { colors } from '~/styles/global';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import ArrowRight from '~/assets/icons/arrow-right.svg';
import ConfirmIcon from '~/assets/icons/confirm.svg';
import CatFoodLogo from '~/assets/images/cat-food-logo.png';
import ToysStoreLogo from '~/assets/images/toys-store-logo.png';

import Spacer from '~/components/Spacer';

function Orders({ navigation }) {
  return (
    <Container backgroundColor={colors.gray}>
      <Content>
        <Title>Histórico</Title>

        <DateContainer>
          <Text>Sexta, 04 de Julho de 2021</Text>
        </DateContainer>

        <HistoryBox onPress={() => navigation.navigate('order-placed')}>
          <HeaderContainer>
            <LogoContainer>
              <Image
                source={CatFoodLogo}
                resizeMode='cover'
                style={{
                  height: 62,
                  width: 62,
                }}
              />

              <TextContainer>
                <Subtitle color={colors.black}>Cat Food</Subtitle>
                <Subtitle style={{ fontSize: 15 }}>Aberto</Subtitle>
              </TextContainer>
            </LogoContainer>

            <ArrowRight />
          </HeaderContainer>

          <OrderContainer>
            <OrderStatus>
              <ConfirmIcon />

              <Text marginLeft={10}>Pedido Concluído</Text>
            </OrderStatus>

            <OrderItem>
              <QuantityItem>
                <Text style={{ color: colors.black }}>1</Text>
              </QuantityItem>

              <Text marginLeft={10} style={{ maxWidth: 280 }}>
                Ração Golden 3kg para gatos castrados, sabor carne
              </Text>
            </OrderItem>
          </OrderContainer>

          <FooterContainer>
            <Text style={{ color: colors.yellow }}>Detalhes</Text>
          </FooterContainer>
        </HistoryBox>

        <HistoryBox>
          <HeaderContainer>
            <LogoContainer>
              <Image
                source={ToysStoreLogo}
                resizeMode='cover'
                style={{
                  height: 50,
                  width: 61,
                }}
              />

              <TextContainer>
                <Subtitle color={colors.black}>Toys Cat</Subtitle>
                <Subtitle style={{ fontSize: 15 }}>Aberto</Subtitle>
              </TextContainer>
            </LogoContainer>

            <ArrowRight />
          </HeaderContainer>

          <OrderContainer>
            <OrderStatus>
              <ConfirmIcon />

              <Text marginLeft={10}>Pedido Concluído</Text>
            </OrderStatus>

            <OrderItem paddingBottom={1}>
              <QuantityItem>
                <Text style={{ color: colors.black }}>1</Text>
              </QuantityItem>

              <Text marginLeft={10} style={{ maxWidth: 280 }}>
                Brinquedo para gato - Torre de trilha de 3 níveis
              </Text>
            </OrderItem>
            <OrderItem paddingTop={1}>
              <Text>Mais 1 item</Text>
            </OrderItem>
          </OrderContainer>

          <FooterContainer>
            <Text style={{ color: colors.yellow }}>Detalhes</Text>
          </FooterContainer>
        </HistoryBox>

        <Spacer />
      </Content>
    </Container>
  );
}

export default Orders;
