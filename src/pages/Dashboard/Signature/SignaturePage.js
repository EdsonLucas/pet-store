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

function SignaturePage({ navigation }) {
  return (
    <Container backgroundColor={colors.gray}>
      <Content showsVerticalScrollIndicator={false}>
        <Title marginBottom={20}>Assinatura</Title>

        <HistoryBox onPress={() => navigation.navigate('signature-details')}>
          <HeaderContainer>
            <TextContainer marginLeft={5}>
              <Subtitle color={colors.black}>Minha assinatura</Subtitle>
              <Subtitle style={{ fontSize: 15 }}>
                Próxima entrega para o dia 25
              </Subtitle>
            </TextContainer>

            <ArrowRight />
          </HeaderContainer>

          <OrderContainer>
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
            <Text style={{ color: colors.yellow }}>Mais detalhes</Text>
          </FooterContainer>
        </HistoryBox>

        <Spacer />
      </Content>

      <ButtonContainer>
        <OutlineButton
          style={{ marginBottom: 10 }}
          onPress={() => navigation.navigate('store-signature')}
        >
          Criar nova assinatura
        </OutlineButton>
      </ButtonContainer>
    </Container>
  );
}

export default SignaturePage;
