import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  Content,
  BoxContainer,
  BoxItem,
  BackgroudImage,
  TextContainer,
  BottomContainer,
  PlusContainer,
  PlusButton,
  CountItem,
  MinusButton,
} from '~/styles/dashboard/cart/cart';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import Input from '~/components/Input/Input';
import DogIcon from '~/assets/icons/dog.svg';
import CatIcon from '~/assets/icons/cat.svg';
import BirdIcon from '~/assets/icons/bird.svg';
import HamsterIcon from '~/assets/icons/hamster.svg';
import FishIcon from '~/assets/icons/fish.svg';
import GoldenFood from '~/assets/images/golden.png';

import { colors, metrics } from '~/styles/global';

import BackButton from '~/components/Button/BackButton';
import Spacer from '~/components/Spacer';
import OutlineButton from '~/components/Button/OutlineButton';
import Button from '~/components/Button/Button';

function Cart({ navigation }) {
  const [countProduct, setCountProduct] = useState(1);

  return (
    <>
    <Container flex="0" backgroundColor={colors.gray} />
    <Content>
      <BackButton onPress={() => navigation.goBack()} />

      <Title style={{paddingHorizontal: metrics.basePadding}} marginBottom={20}>Carrinho</Title>

      <BoxContainer showsVerticalScrollIndicator={false}>
        <BoxItem>
          <BackgroudImage color={colors.yellow}>
            <Image
              source={GoldenFood}
              resizeMode='cover'
              style={{
                alignSelf: 'center',
                width: 60,
                height: 100,
              }}
            />
          </BackgroudImage>

          <TextContainer>
            <Subtitle color={colors.black} marginTop={16}>
              Ração Golden para Gatos adultos - Sabo…
            </Subtitle>

            <Text>Cat World • 5km</Text>

            <Subtitle color={colors.black} marginTop={15}>
              R$ 49,59
            </Subtitle>
          </TextContainer>

          <PlusContainer>
            <PlusButton onPress={() => setCountProduct(countProduct + 1)}>
              <Text> + </Text>
            </PlusButton>

            <CountItem>
            <Text color={colors.black}>{countProduct}</Text>
            </CountItem>

            <MinusButton onPress={() => setCountProduct(countProduct - 1 || 1)}>
              <Text> - </Text>
            </MinusButton>
          </PlusContainer>
        </BoxItem>


        <Spacer height={20} />
      </BoxContainer>

      <BottomContainer>
      <Subtitle alignSelf="center" color={colors.black} marginBottom={20}>Subtotal: R$115,49</Subtitle>

      <Button style={{marginBottom:10}}>Comprar</Button>
      <OutlineButton>Criar Assinatura</OutlineButton>
      </BottomContainer>
      </Content>
    </>
  );
}

export default Cart;
