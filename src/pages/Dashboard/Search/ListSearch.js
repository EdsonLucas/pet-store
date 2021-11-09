import React from 'react';
import { Image } from 'react-native';
import {
  Content,
  BoxContainer,
  BoxItem,
  BackgroudImage,
  TextContainer,
  RowTextContainer,
  StoreItem,
  StoreImageContainer,
  StoreTitle,
  StoreDescription,
  StoreShipping,
} from '~/styles/dashboard/search/listsearch';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import Input from '~/components/Input/Input';
import OutlineButton from '~/components/Button/OutlineButton';

import GoldenFood from '~/assets/images/golden.png';
import AnimalShopLogo from '~/assets/images/animal-shop-logo.png';

import { colors } from '~/styles/global';

import BackButton from '~/components/Button/BackButton';
import Spacer from '~/components/Spacer';

function ListSearch({ navigation }) {
  return (
    <Container backgroundColor={colors.gray}>
      <BackButton onPress={() => navigation.goBack()} />

      <Content>
        <Input
          style={{ backgroundColor: colors.white }}
          placeholder='Produtos, Lojas e etc…'
          returnKeyType='send'
          value='Ração'
        />

        <Subtitle marginTop={30} marginBottom={10} color={colors.black}>
          Você procura por
        </Subtitle>
      </Content>

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

            <RowTextContainer>
              <Text>Cat World • 5km</Text>
              <Text color={colors.green}>Entrega Grátis</Text>
            </RowTextContainer>

            <Subtitle alignSelf='flex-end' color={colors.black} marginTop={25}>
              R$ 49,59
            </Subtitle>
          </TextContainer>
        </BoxItem>

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

            <RowTextContainer>
              <Text>Cat World • 5km</Text>
              <Text color={colors.green}>Entrega Grátis</Text>
            </RowTextContainer>

            <Subtitle alignSelf='flex-end' color={colors.black} marginTop={25}>
              R$ 49,59
            </Subtitle>
          </TextContainer>
        </BoxItem>

        <OutlineButton
          textColor={colors.grayRegular}
          borderColor={colors.transparent}
        >
          Ver mais
        </OutlineButton>

        <Subtitle marginTop={30} marginBottom={15} color={colors.black}>
          Lojas relacionadas
        </Subtitle>

        <StoreItem>
          <StoreImageContainer>
            <Image
              source={AnimalShopLogo}
              resizeMode='cover'
              style={{
                height: 65,
                width: 68,
              }}
            />

            <TextContainer>
              <StoreTitle>Animal Shop</StoreTitle>
              <StoreDescription>Produtos variados • 5km</StoreDescription>
              <StoreShipping>Entrega Grátis</StoreShipping>
            </TextContainer>
          </StoreImageContainer>
        </StoreItem>

        <StoreItem>
          <StoreImageContainer>
            <Image
              source={AnimalShopLogo}
              resizeMode='cover'
              style={{
                height: 65,
                width: 68,
              }}
            />

            <TextContainer>
              <StoreTitle>Animal Shop</StoreTitle>
              <StoreDescription>Produtos variados • 5km</StoreDescription>
              <StoreShipping>Entrega Grátis</StoreShipping>
            </TextContainer>
          </StoreImageContainer>
        </StoreItem>

        <StoreItem>
          <StoreImageContainer>
            <Image
              source={AnimalShopLogo}
              resizeMode='cover'
              style={{
                height: 65,
                width: 68,
              }}
            />

            <TextContainer>
              <StoreTitle>Animal Shop</StoreTitle>
              <StoreDescription>Produtos variados • 5km</StoreDescription>
              <StoreShipping>Entrega Grátis</StoreShipping>
            </TextContainer>
          </StoreImageContainer>
        </StoreItem>

        <OutlineButton
          textColor={colors.grayRegular}
          borderColor={colors.transparent}
        >
          Ver mais
        </OutlineButton>

        <Spacer height={20} />
      </BoxContainer>
    </Container>
  );
}

export default ListSearch;
