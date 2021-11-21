import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  Content,
  BoxContainer,
  SwipeContainer,
  BoxItem,
  BackgroudImage,
  TextContainer,
  BottomContainer,
  PlusContainer,
  PlusButton,
  CountItem,
  MinusButton,
  DeleteButton,
} from '~/styles/dashboard/cart/precart';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import GoldenFood from '~/assets/images/golden.png';
import DeleteIcon from '~/assets/icons/delete.svg';

import { colors, metrics } from '~/styles/global';

import BackButton from '~/components/Button/BackButton';
import Spacer from '~/components/Spacer';
import OutlineButton from '~/components/Button/OutlineButton';
import Button from '~/components/Button/Button';

function PreCart({ navigation }) {
  const [countProduct, setCountProduct] = useState(1);

  const rightButtons = [
    <DeleteButton>
      <DeleteIcon color={colors.white} />
    </DeleteButton>,
  ];

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
          <SwipeContainer rightButtons={rightButtons}>
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

                <MinusButton
                  onPress={() => setCountProduct(countProduct - 1 || 1)}
                >
                  <Text> - </Text>
                </MinusButton>
              </PlusContainer>
            </BoxItem>
          </SwipeContainer>

          <Spacer height={20} />
        </BoxContainer>

        <BottomContainer>
          <Subtitle alignSelf='center' color={colors.black} marginBottom={20}>
            Subtotal: R$115,49
          </Subtitle>

          <Button
            style={{ marginBottom: 10 }}
            onPress={() => navigation.navigate('cart')}
          >
            Comprar
          </Button>
          <OutlineButton
            onPress={() => navigation.navigate('create-signature')}
          >
            Criar Assinatura
          </OutlineButton>
        </BottomContainer>
      </Content>
    </>
  );
}

export default PreCart;
