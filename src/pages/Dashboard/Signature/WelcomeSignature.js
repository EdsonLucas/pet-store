import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { colors, metrics } from '~/styles/global';
import { Title, Subtitle, Text } from '~/styles/global/general';

import {
  Container,
  Content,
  Header,
  ButtonContainer,
  DogImage,
  SubtitleText,
  AdvantageContainer,
  FoodContainer,
  HowItWorksContainer,
  HowItWorksItem,
} from '~/styles/dashboard/signature/welcomesignature';

import Button from '~/components/Button/Button';
import Logo from '~/components/Logo';
import AddressHouseIcon from '~/assets/icons/address-house2.svg';
import ShoppingCart from '~/assets/icons/shopping-cart.svg';
import CreditCard from '~/assets/icons/credit-card2.svg';
import Calendar from '~/assets/icons/calendar.svg';

import Food from '~/assets/images/food.svg';

const WelcomeSignature = ({ navigation }) => (
  <Container showsVerticalScrollIndicator={false}>
    <SafeAreaView />
    <StatusBar backgroundColor={colors.yellow} />

    <Header>
      <Logo width={50} height={20} fontSize={20} marginTitleTop={-15} />

      <SubtitleText>
        Compre na Pet Store e gaste o seu tempo com quem sempre está ao seu lado
      </SubtitleText>

      <ButtonContainer>
        <Button onPress={() => {}}>Crie sua assinatura</Button>
      </ButtonContainer>
    </Header>

    <AdvantageContainer>
      <Text color={colors.black} marginBottom={10}>
        Vantagens de ser um assinante
      </Text>
      <Subtitle
        color={colors.black}
        textAlign='center'
        style={{ width: '60%' }}
      >
        15% de desconto em suas compras
      </Subtitle>
    </AdvantageContainer>

    <FoodContainer>
      <Food />
    </FoodContainer>

    <HowItWorksContainer>
      <Title color={colors.white} marginBottom={20}>
        Como funciona?
      </Title>

      <HowItWorksItem>
        <Title color={colors.white}>1. </Title>
        <ShoppingCart />
        <Subtitle style={{ width: '60%' }} marginLeft={30} color={colors.white}>
          Você escolhe os produtos
        </Subtitle>
      </HowItWorksItem>

      <HowItWorksItem>
        <Title color={colors.white}>1. </Title>
        <Calendar />
        <Subtitle style={{ width: '60%' }} marginLeft={30} color={colors.white}>
          Escolhe a frequência de entrega (Ex.: a cada 15 dias)
        </Subtitle>
      </HowItWorksItem>

      <HowItWorksItem>
        <Title color={colors.white}>1. </Title>
        <AddressHouseIcon />
        <Subtitle style={{ width: '60%' }} marginLeft={30} color={colors.white}>
          Acerta seu pagamento na data combinada
        </Subtitle>
      </HowItWorksItem>

      <HowItWorksItem>
        <Title color={colors.white}>1. </Title>
        <CreditCard />
        <Subtitle style={{ width: '60%' }} marginLeft={30} color={colors.white}>
          Pronto! Receberá seus produtos sempre na data escolhida
        </Subtitle>
      </HowItWorksItem>
    </HowItWorksContainer>

    <ButtonContainer>
      <Button onPress={() => {}}>Crie sua assinatura</Button>
    </ButtonContainer>

    <DogImage />
  </Container>
);

export default WelcomeSignature;
