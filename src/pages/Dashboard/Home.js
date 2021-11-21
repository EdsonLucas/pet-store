import React, { useState } from 'react';
import { Image, View } from 'react-native';
import Button from '~/components/Button/Button';
import {
  Content,
  Location,
  LocationSubtitle,
  LocationTitle,
  Banner,
  BannerItem,
  CatImage,
  ForYouContainer,
  ForYouHeader,
  ForYouContent,
  ForYouButton,
  FavoritesContainer,
  Favorites,
  StoreContainer,
  StoreItem,
  StoreImageContainer,
  TextContainer,
  StoreTitle,
  StoreDescription,
  StoreShipping,
  AddFavorite,
  TitleCards,
} from '~/styles/dashboard/home';
import { colors, metrics } from '~/styles/global';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import GoldenFood from '~/assets/images/golden.png';
import CatFoodLogo from '~/assets/images/cat-food-logo.png';
import ToysStoreLogo from '~/assets/images/toys-store-logo.png';
import FunnyGoatLogo from '~/assets/images/funny-goat-logo.png';
import AnimalShopLogo from '~/assets/images/animal-shop-logo.png';
import PetsPlayLogo from '~/assets/images/pets-play-logo.png';
import Heart from '~/assets/icons/heart.svg';
import ProductItem from '~/components/ProductItem';
import Spacer from '~/components/Spacer';

function Home({ navigation }) {
  return (
    <>
      <Container backgroundColor={colors.gray}>
        <Content showsVerticalScrollIndicator={false}>
          <Location onPress={() => navigation.navigate('address-page')}>
            <LocationSubtitle>Localização</LocationSubtitle>
            <LocationTitle>Campo Grande, Cariacica</LocationTitle>
          </Location>

          <Banner horizontal>
            <BannerItem>
              <Text color={colors.white} marginBottom={10}>
                Bem-vindo ao Pet Store
              </Text>

              <Title
                style={{ fontSize: 21 }}
                color={colors.white}
                marginBottom={18}
              >
                Ganhe 5% de desconto {'\n'}em produtos selecionados
              </Title>

              <Button
                style={{ width: '45%' }}
                backgroundColor={colors.black}
                onPress={() => navigation.navigate('selected-products-store')}
              >
                Pegar agora
              </Button>

              <CatImage />
            </BannerItem>
          </Banner>

          <ForYouContainer>
            <ForYouHeader>
              <TitleCards>Para você</TitleCards>

              <ForYouButton
                onPress={() => navigation.navigate('for-you-store')}
              >
                <Text>Ver Todos</Text>
              </ForYouButton>
            </ForYouHeader>

            <ForYouContent horizontal showsHorizontalScrollIndicator={false}>
              <ProductItem
                onPress={() => navigation.navigate('pre-cart')}
                widthProduct='330px'
                image={GoldenFood}
                title='Ração Golden para Gatos adultos - Sabo…'
                store='Cat World'
                distance='5km'
                priceDelivery='Entrega Grátis'
                productPrice='R$ 49,59'
              />

              <ProductItem
                marginLeft={20}
                widthProduct='330px'
                image={GoldenFood}
                title='Ração Golden para Gatos adultos - Sabo…'
                store='Cat World'
                distance='5km'
                priceDelivery='Entrega Grátis'
                productPrice='R$ 49,59'
              />

              <ProductItem
                marginLeft={20}
                widthProduct='330px'
                image={GoldenFood}
                title='Ração Golden para Gatos adultos - Sabo…'
                store='Cat World'
                distance='5km'
                priceDelivery='Entrega Grátis'
                productPrice='R$ 49,59'
              />

              <Spacer width={60} />
            </ForYouContent>
          </ForYouContainer>

          <FavoritesContainer>
            <TitleCards
              marginLeft={metrics.basePadding}
              marginTop={25}
              marginBottom={15}
            >
              Seus Favoritos
            </TitleCards>

            <Favorites horizontal showsHorizontalScrollIndicator={false}>
              <Image
                source={CatFoodLogo}
                resizeMode='cover'
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: 'center',
                  marginHorizontal: 10,
                }}
              />
              <Image
                source={ToysStoreLogo}
                resizeMode='cover'
                style={{
                  height: 65,
                  width: 80,
                  alignSelf: 'center',
                  marginHorizontal: 10,
                }}
              />
              <Image
                source={FunnyGoatLogo}
                resizeMode='cover'
                style={{
                  height: 68,
                  width: 90,
                  alignSelf: 'center',
                  marginHorizontal: 10,
                }}
              />
            </Favorites>
          </FavoritesContainer>

          <StoreContainer>
            <TitleCards marginBottom={5}>Pet Shops</TitleCards>

            <StoreItem onPress={() => navigation.navigate('page-store')}>
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

              <AddFavorite>
                <Heart />
              </AddFavorite>
            </StoreItem>

            <StoreItem>
              <StoreImageContainer>
                <Image
                  source={PetsPlayLogo}
                  resizeMode='cover'
                  style={{
                    height: 55,
                    width: 68,
                  }}
                />

                <TextContainer>
                  <StoreTitle>Pets Play</StoreTitle>
                  <StoreDescription>Brinquedos • 7km</StoreDescription>
                  <StoreShipping>Entrega Grátis</StoreShipping>
                </TextContainer>
              </StoreImageContainer>

              <AddFavorite>
                <Heart />
              </AddFavorite>
            </StoreItem>
          </StoreContainer>
        </Content>
      </Container>
    </>
  );
}

export default Home;
