import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  Content,
  FilterContainer,
  BoxContainer,
  TextContainer,
  StoreItem,
  StoreImageContainer,
  StoreTitle,
  StoreDescription,
  StoreShipping,
  FilterModalContainer,
  FilterItem,
  FilterIconContainer,
} from '~/styles/dashboard/search/listsearch';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import Input from '~/components/Input/Input';
import OutlineButton from '~/components/Button/OutlineButton';

import GoldenFood from '~/assets/images/golden.png';
import AnimalShopLogo from '~/assets/images/animal-shop-logo.png';
import ArrowDown from '~/assets/icons/arrow-down.svg';
import TimeDelivery from '~/assets/icons/time-delivery.svg';
import DefaultOrdenation from '~/assets/icons/default-ordenation.svg';
import PriceDelivery from '~/assets/icons/price.svg';

import { colors } from '~/styles/global';

import BackButton from '~/components/Button/BackButton';
import ProductItem from '~/components/ProductItem';
import Modal from '~/components/Modal/Modal';
import Spacer from '~/components/Spacer';

function ListSearch({ navigation }) {
  const [filterModalActive, setFilterModalActive] = useState(false);

  return (
    <>
      <Container backgroundColor={colors.gray}>
        <BackButton onPress={() => navigation.goBack()} />

        <Content>
          <Input
            style={{ backgroundColor: colors.white }}
            placeholder='Produtos, Lojas e etc…'
            returnKeyType='send'
            value='Ração'
          />

          <FilterContainer onPress={() => setFilterModalActive(true)}>
            <Text color={colors.black}>Ordenar por</Text>

            <ArrowDown />
          </FilterContainer>

          <Subtitle marginTop={5} marginBottom={10} color={colors.black}>
            Você procura por
          </Subtitle>
        </Content>

        <BoxContainer showsVerticalScrollIndicator={false}>
          <ProductItem
            image={GoldenFood}
            title='Ração Golden para Gatos adultos - Sabo…'
            store='Cat World'
            distance='5km'
            priceDelivery='Entrega Grátis'
            productPrice='R$ 49,59'
          />

          <ProductItem
            image={GoldenFood}
            title='Ração Golden para Gatos adultos - Sabo…'
            store='Cat World'
            distance='5km'
            priceDelivery='Entrega Grátis'
            productPrice='R$ 49,59'
          />

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

      {filterModalActive && (
        <Modal
          isOpen={filterModalActive}
          onClosed={() => setFilterModalActive(false)}
        >
          <Title>Ordenar por</Title>

          <FilterModalContainer>
            <FilterItem>
              <FilterIconContainer
                borderColor='#bc3f3f10'
                backgroundColor='#bc3f3f30'
              >
                <DefaultOrdenation color={colors.red} />
              </FilterIconContainer>

              <Text textAlign='center' color={colors.red}>
                Ordenação {'\n'} padrão
              </Text>
            </FilterItem>

            <FilterItem>
              <FilterIconContainer>
                <PriceDelivery color={colors.grayMedium} />
              </FilterIconContainer>

              <Text textAlign='center' color={colors.black}>
                Preço
              </Text>
            </FilterItem>

            <FilterItem>
              <FilterIconContainer>
                <TimeDelivery color={colors.grayMedium} />
              </FilterIconContainer>

              <Text textAlign='center' color={colors.black}>
                Tempo de {'\n'} entrega
              </Text>
            </FilterItem>
          </FilterModalContainer>
        </Modal>
      )}
    </>
  );
}

export default ListSearch;
