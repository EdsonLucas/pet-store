import React from 'react';
import { Image } from 'react-native';
import {
  Content,
  FilterItems,
  FilterButton,
  BoxContainer,
} from '~/styles/dashboard/search/quicklysearch';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import GoldenFood from '~/assets/images/golden.png';

import { colors } from '~/styles/global';

import BackButton from '~/components/Button/BackButton';
import ProductItem from '~/components/ProductItem';
import Spacer from '~/components/Spacer';

function SelectedProductsStore({ navigation }) {
  return (
    <Container backgroundColor={colors.gray}>
      <BackButton onPress={() => navigation.goBack()} />

      <Content>
        <Title marginBottom={20}>Produtos selecionados com desconto</Title>
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

        <Spacer height={20} />
      </BoxContainer>
    </Container>
  );
}

export default SelectedProductsStore;
