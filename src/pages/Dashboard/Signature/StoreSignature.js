import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
// import Accordion from 'react-native-collapsible/Accordion';
import {
  Content,
  AccordionTitleContainer,
  AccordionTitle,
  BoxContainer,
  BoxItem,
  BackgroudImage,
  TextContainer,
  Banner,
  BannerItem,
  SignatureBanner,
  FavoritesContainer,
  TitleCards,
  Favorites,
} from '~/styles/dashboard/signature/signaturestore';
import { Container, Title, Subtitle, Text } from '~/styles/global/general';

import GoldenFood from '~/assets/images/golden.png';
import CatFoodLogo from '~/assets/images/cat-food-logo.png';
import ToysStoreLogo from '~/assets/images/toys-store-logo.png';
import FunnyGoatLogo from '~/assets/images/funny-goat-logo.png';

import BackButton from '~/components/Button/BackButton';
import Input from '~/components/Input/Input';

import { colors, metrics } from '~/styles/global';

import StoreProductsList from '~/data/store-products';

export default function StoreSignature({ navigation, nextStep }) {
  const [inputValue, setInputValue] = useState('');

  const renderContent = (item) => (
    <>
      {item.productList.map((value) => (
        <BoxItem
          key={Math.random()}
          onPress={() =>
            navigation.navigate('cart-visible-pages', {
              screen: 'product',
              params: { product: value },
            })
          }
        >
          <BackgroudImage>
            <Image
              source={{ uri: value.image }}
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
              {value.name}
            </Subtitle>

            <Subtitle color={colors.green} marginTop={25}>
              {value.price}
            </Subtitle>
          </TextContainer>
        </BoxItem>
      ))}
    </>
  );

  return (
    <>
      <Container backgroundColor={colors.gray} />
      <BoxContainer showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => navigation.goBack()} />

        <Banner horizontal>
          <BannerItem>
            <Title color={colors.white} marginBottom={5}>
              Assinou, {'\n'}Economizou
            </Title>

            <Text color={colors.white} marginBottom={10}>
              Tudo que você {'\n'}precisa em um {'\n'}só lugar!
            </Text>

            <SignatureBanner />
          </BannerItem>
        </Banner>

        <Content>
          <Input
            style={{ backgroundColor: colors.white }}
            placeholder='Produtos, Lojas e etc…'
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            returnKeyType='send'
            onSubmitEditing={() =>
              navigation.navigate('list-search', { search: inputValue })
            }
          />
        </Content>

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

        {StoreProductsList.map((storeItem) => (
          <>
            {storeItem.products.map((productsItem) => (
              <>
                <AccordionTitleContainer key={Math.random()}>
                  <AccordionTitle>
                    {productsItem.productListTitle}
                  </AccordionTitle>
                </AccordionTitleContainer>

                {renderContent(productsItem)}
              </>
            ))}
          </>
        ))}
      </BoxContainer>
      <Container flex={0.1} backgroundColor={colors.white} />
    </>
  );
}
