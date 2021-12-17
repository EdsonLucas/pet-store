import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

import useUserStore from '~/store/user.store';

function PreCart({ navigation }) {
  const { fetchProducts, cartProducts } = useUserStore();

  const [totalPrice, setTotalPrice] = useState(0);
  const [countProduct, setCountProduct] = useState(1);

  const getPrices = () => {
    const array = [];
    let value = 0;

    cartProducts.map((item) => array.push(item.price));

    for (let i = 0; array.length > i; i++) {
      value += array[i];
    }

    setTotalPrice(value.toFixed(2));
  };

  async function fetchData() {
    await fetchProducts();

    getPrices();
  }

  useEffect(() => {
    fetchData();
  }, [totalPrice]);

  const deleteProduct = async (name) => {
    const index = cartProducts.findIndex((x) => x.name === name);

    if (index !== -1) {
      cartProducts.splice(index, 1);

      const jsonValue = JSON.stringify(cartProducts);
      await AsyncStorage.setItem('cartProducts', jsonValue);

      fetchData();
    }
  };

  const rightButtons = (name) => [
    <DeleteButton onPress={() => deleteProduct(name)}>
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
          {cartProducts.map((item) => (
            <SwipeContainer
              key={item.name + Math.random()}
              rightButtons={rightButtons(item.name)}
            >
              <BoxItem key={item.name}>
                <BackgroudImage color={colors.yellow}>
                  <Image
                    source={{ uri: item.image }}
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
                    {item.name}
                  </Subtitle>

                  <Subtitle color={colors.black} marginTop={15}>
                    R$ {item.price.toFixed(2) * countProduct}
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
          ))}

          <Spacer height={20} />
        </BoxContainer>

        <BottomContainer>
          <Subtitle alignSelf='center' color={colors.black} marginBottom={20}>
            Subtotal: R$ {totalPrice}
          </Subtitle>

          <Button
            style={{ marginBottom: 10 }}
            onPress={() =>
              navigation.navigate('cart', { cartProducts, totalPrice })
            }
          >
            Comprar
          </Button>
          <OutlineButton
            onPress={() =>
              navigation.navigate('create-signature', {
                cartProducts,
                totalPrice,
              })
            }
          >
            Criar Assinatura
          </OutlineButton>
        </BottomContainer>
      </Content>
    </>
  );
}

export default PreCart;
