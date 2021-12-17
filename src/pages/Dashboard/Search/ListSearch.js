import React, { useState, useEffect } from 'react';
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

import StoreProductsList from '~/data/store-products';

function ListSearch({ navigation, route }) {
  const [filterModalActive, setFilterModalActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [store, setStore] = useState(StoreProductsList);
  const [filteredItem, setFilteredItem] = useState([]);

  const { search } = route.params;

  useEffect(() => {
    setInputValue(search);
  }, []);

  return (
    <>
      <Container backgroundColor={colors.gray}>
        <BackButton onPress={() => navigation.goBack()} />

        <Content>
          <Input
            style={{ backgroundColor: colors.white }}
            placeholder='Produtos, Lojas e etc…'
            returnKeyType='send'
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
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
          {store.map((storeItem) => (
            <>
              {storeItem.products.map((productsItem) => (
                <>
                  {productsItem.productList.map((item) => (
                    <>
                      {item.tipo === inputValue && (
                        <ProductItem
                          onPress={() =>
                            navigation.navigate('cart-visible-pages', {
                              screen: 'product',
                              params: { product: item },
                            })
                          }
                          image={{ uri: item.image }}
                          title={item.name}
                          store={StoreProductsList[item.storeId].name}
                          distance={StoreProductsList[item.storeId].distance}
                          priceDelivery='Entrega Grátis'
                          productPrice={`R$ ${item.price}`}
                        />
                      )}
                    </>
                  ))}
                </>
              ))}
            </>
          ))}

          <OutlineButton
            textColor={colors.grayRegular}
            borderColor={colors.transparent}
          >
            Ver mais
          </OutlineButton>

          <Subtitle marginTop={30} marginBottom={15} color={colors.black}>
            Lojas relacionadas
          </Subtitle>

          {StoreProductsList.map((value) => (
            <>
              {value.category === search ||
                (value.category === 'Produtos variados' && (
                  <StoreItem>
                    <StoreImageContainer>
                      <Image
                        source={value.avatar}
                        resizeMode='cover'
                        style={{
                          height: value.heightAvatar,
                          width: value.widthAvatar,
                        }}
                      />

                      <TextContainer>
                        <StoreTitle>{value.name}</StoreTitle>
                        <StoreDescription>
                          {value.category} • {value.distance}
                        </StoreDescription>
                        <StoreShipping>{value.deliveryPrice}</StoreShipping>
                      </TextContainer>
                    </StoreImageContainer>
                  </StoreItem>
                ))}
            </>
          ))}

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
