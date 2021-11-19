import React from 'react';
import { Image } from 'react-native';
import {
  Content,
  FilterItems,
  FilterButton,
  BoxContainer,
} from '~/styles/dashboard/search/quicklysearch';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import Input from '~/components/Input/Input';
import DogIcon from '~/assets/icons/dog.svg';
import CatIcon from '~/assets/icons/cat.svg';
import BirdIcon from '~/assets/icons/bird.svg';
import HamsterIcon from '~/assets/icons/hamster.svg';
import FishIcon from '~/assets/icons/fish.svg';
import GoldenFood from '~/assets/images/golden.png';

import { colors } from '~/styles/global';

import BackButton from '~/components/Button/BackButton';
import ProductItem from '~/components/ProductItem';
import Spacer from '~/components/Spacer';

function QuicklySearch({ navigation }) {
  return (
    <Container backgroundColor={colors.gray}>
      <BackButton onPress={() => navigation.goBack()} />

      <Content>
        <Title marginBottom={20}>Alimentação</Title>

        <Input
          style={{ backgroundColor: colors.white }}
          placeholder='Produtos, Lojas e etc…'
          returnKeyType='send'
        />
      </Content>

      <Content padding={0.1}>
        <FilterItems horizontal showsHorizontalScrollIndicator={false}>
          <FilterButton color={colors.yellow}>
            <DogIcon />
          </FilterButton>

          <FilterButton>
            <CatIcon />
          </FilterButton>

          <FilterButton>
            <BirdIcon />
          </FilterButton>

          <FilterButton>
            <HamsterIcon />
          </FilterButton>

          <FilterButton>
            <FishIcon />
          </FilterButton>

          <Spacer width={50} height={0.1} />
        </FilterItems>
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

export default QuicklySearch;
