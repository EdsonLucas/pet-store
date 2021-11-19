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
import OutlineButton from '~/components/Button/OutlineButton';

function SignaturePage({ navigation }) {
  return (
    <Container backgroundColor={colors.gray}>
      <Content showsVerticalScrollIndicator={false}>
        <Title marginBottom={20}>Assinatura</Title>

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

        <Spacer />
      </Content>

      <OutlineButton style={{ marginBottom: 10 }}>
        Criar nova assinatura
      </OutlineButton>
    </Container>
  );
}

export default SignaturePage;
