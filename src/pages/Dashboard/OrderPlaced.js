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
} from '~/styles/dashboard/orderplaced';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import GoldenFood from '~/assets/images/golden.png';
import DogOrder from '~/assets/images/dog-order.png';

import { colors, metrics } from '~/styles/global';

import BackButton from '~/components/Button/BackButton';
import Spacer from '~/components/Spacer';
import OutlineButton from '~/components/Button/OutlineButton';
import Button from '~/components/Button/Button';

function OrderPlaced({ navigation }) {
  const [countProduct, setCountProduct] = useState(1);

  return (
    <>
    <Container flex="0" backgroundColor={colors.gray} />
    <BackButton onPress={() => navigation.goBack()} />

    <Content>
      <Image style={{marginTop: -40,  alignSelf: 'center', width: 110, height: 150, zIndex: 999}} source={DogOrder} />

      <BoxContainer>
        <Title marginTop={40} textAlign="center">Obaaa! Seu pedido n˚ 3045 foi solicitado!</Title>

        <Text marginTop={10} textAlign="center">Agora, falta muito pouco para você deixar o dia do seu pet mais feliz </Text>
      </BoxContainer>

      </Content>
    </>
  );
}

export default OrderPlaced;
