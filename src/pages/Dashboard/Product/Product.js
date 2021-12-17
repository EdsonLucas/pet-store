import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'react-native';
import {
  Content,
  Header,
  HeaderProduct,
  BoxContainer,
  BoxItem,
  BackgroudImage,
  TextContainer,
  DescriptionContainer,
  ButtonContainer,
  StoreItem,
  StoreImageContainer,
  StoreTitle,
  StoreDescription,
  StoreShipping,
} from '~/styles/dashboard/product/product';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import GoldenFood from '~/assets/images/golden.png';
import AnimalShopLogo from '~/assets/images/animal-shop-logo.png';

import { colors } from '~/styles/global';

import BackButton from '~/components/Button/BackButton';
import Spacer from '~/components/Spacer';
import Button from '~/components/Button/Button';

import StoreProductsList from '~/data/store-products';

function Product({ navigation, route }) {
  const { product } = route.params;

  const [store, setStore] = useState(StoreProductsList[product.storeId]);

  const navigateCart = () => {
    navigation.navigate('pre-cart');
  };

  const sendToCart = async (product) => {
    const previousItems = await AsyncStorage.getItem('cartProducts');
    const previousParsedItem = JSON.parse(previousItems);

    const array = [];

    if (previousItems !== null) {
      previousParsedItem.push(product);

      const jsonValue = JSON.stringify(previousParsedItem);
      await AsyncStorage.setItem('cartProducts', jsonValue);

      navigateCart();
    } else {
      array.push(product);

      const jsonValue = JSON.stringify(array);
      await AsyncStorage.setItem('cartProducts', jsonValue);

      navigateCart();
    }
  };

  return (
    <>
      <Container />
      <Header>
        <BackButton
          style={{ marginBottom: 10 }}
          onPress={() => navigation.goBack()}
        />
      </Header>

      <BoxContainer showsVerticalScrollIndicator={false}>
        <HeaderProduct>
          <BackgroudImage>
            <Image
              source={{ uri: product.image }}
              resizeMode='cover'
              style={{
                alignSelf: 'center',
                width: 200,
                height: 200,
              }}
            />
          </BackgroudImage>

          <TextContainer>
            <Subtitle textAlign='center' color={colors.black} marginTop={16}>
              {product.name}
            </Subtitle>

            <Title marginTop={25} marginBottom={20}>
              R$ {product.price}
            </Title>
          </TextContainer>

          <Button onPress={() => sendToCart(product)}>
            Adicionar ao carinho
          </Button>
        </HeaderProduct>

        <Content>
          <StoreItem onPress={() => navigation.navigate('page-store')}>
            <StoreImageContainer>
              <Image
                source={store.avatar}
                resizeMode='cover'
                style={{
                  height: store.heightAvatar,
                  width: store.widthAvatar,
                }}
              />

              <TextContainer alignItems='flex-start'>
                <StoreTitle>{store.name}</StoreTitle>
                <StoreDescription>
                  {store.category} • {store.distance}
                </StoreDescription>
                <StoreShipping>{store.deliveryPrice}</StoreShipping>
              </TextContainer>
            </StoreImageContainer>
          </StoreItem>

          <BoxItem marginTop={20}>
            <Subtitle color={colors.black} marginBottom={10}>
              Descrição
            </Subtitle>

            <Text>{product.description}</Text>
          </BoxItem>

          <BoxItem paddingHorizontal={0.1}>
            <Subtitle color={colors.black} marginLeft={23} marginBottom={10}>
              Especificações
            </Subtitle>

            <DescriptionContainer>
              <Text marginLeft={23}>Linha</Text>

              <Text marginRight={23} color={colors.grayRegular}>
                {product.especificacao.linha}
              </Text>
            </DescriptionContainer>

            <DescriptionContainer>
              <Text marginLeft={23}>Porte do animal</Text>

              <Text marginRight={23} color={colors.grayRegular}>
                {product.especificacao.porte_raca}
              </Text>
            </DescriptionContainer>

            <DescriptionContainer>
              <Text marginLeft={23}>Peso de produto</Text>

              <Text marginRight={23} color={colors.grayRegular}>
                {product.especificacao.peso}
              </Text>
            </DescriptionContainer>

            <DescriptionContainer>
              <Text marginLeft={23}>Recomendo para idade</Text>

              <Text marginRight={23} color={colors.grayRegular}>
                {product.especificacao.idade}
              </Text>
            </DescriptionContainer>
          </BoxItem>
        </Content>

        <ButtonContainer>
          <Button onPress={() => sendToCart(product)}>
            Adicionar ao carinho
          </Button>
        </ButtonContainer>
        <Spacer height={50} />
      </BoxContainer>
    </>
  );
}

export default Product;
