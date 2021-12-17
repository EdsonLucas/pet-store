import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
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
import HeartFilled from '~/assets/icons/heart-filled.svg';
import ProductItem from '~/components/ProductItem';
import Spacer from '~/components/Spacer';

import StoreProductsList from '~/data/store-products';

function Home({ navigation }) {
  const [store, setStore] = useState(StoreProductsList);
  const [addFavorite, setAddFavorite] = useState(false);

  return (
    <>
      <Container backgroundColor={colors.gray}>
        <Content showsVerticalScrollIndicator={false}>
          <Location onPress={() => navigation.navigate('address-page')}>
            <LocationSubtitle>Localização</LocationSubtitle>
            <LocationTitle>São Geraldo, Cariacica</LocationTitle>
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
              {store.map((storeItem) => (
                <>
                  {storeItem.products.map((productsItem) => (
                    <>
                      {productsItem.productList.map((item) => (
                        <ProductItem
                          key={Math.random()}
                          onPress={() =>
                            navigation.navigate('cart-visible-pages', {
                              screen: 'product',
                              params: { product: item },
                            })
                          }
                          marginLeft={15}
                          widthProduct='330px'
                          image={{ uri: item.image }}
                          title={item.name}
                          store={StoreProductsList[item.storeId].name}
                          distance={StoreProductsList[item.storeId].distance}
                          priceDelivery='Entrega Grátis'
                          productPrice={`R$ ${item.price}`}
                        />
                      ))}
                    </>
                  ))}
                </>
              ))}

              <Spacer width={60} />
            </ForYouContent>
          </ForYouContainer>

          {addFavorite && (
            <FavoritesContainer>
              <TitleCards
                marginLeft={metrics.basePadding}
                marginTop={25}
                marginBottom={15}
              >
                Seus Favoritos
              </TitleCards>

              <Favorites horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('cart-visible-pages', {
                      screen: 'page-store',
                      params: { item: store[1] },
                    })
                  }
                >
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
                </TouchableOpacity>
              </Favorites>
            </FavoritesContainer>
          )}

          <StoreContainer>
            <TitleCards marginBottom={5}>Pet Shops</TitleCards>

            {store.map((item) => (
              <StoreItem
                key={item.id}
                onPress={() =>
                  navigation.navigate('cart-visible-pages', {
                    screen: 'page-store',
                    params: { item },
                  })
                }
              >
                <StoreImageContainer>
                  <Image
                    source={item.avatar}
                    resizeMode='cover'
                    style={{
                      height: item.heightAvatar,
                      width: item.widthAvatar,
                    }}
                  />

                  <TextContainer>
                    <StoreTitle>{item.name}</StoreTitle>
                    <StoreDescription>
                      {item.category} • {item.distance}
                    </StoreDescription>
                    <StoreShipping>{item.deliveryPrice}</StoreShipping>
                  </TextContainer>
                </StoreImageContainer>

                <AddFavorite onPress={() => setAddFavorite(!addFavorite)}>
                  {item.id === 1 && addFavorite ? <HeartFilled /> : <Heart />}
                </AddFavorite>
              </StoreItem>
            ))}
          </StoreContainer>
        </Content>
      </Container>
    </>
  );
}

export default Home;
