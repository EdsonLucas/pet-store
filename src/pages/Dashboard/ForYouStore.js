import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  Content,
  FilterItems,
  FilterButton,
  BoxContainer,
} from '~/styles/dashboard/search/quicklysearch';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

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

function ForYouStore({ navigation }) {
  const [filter, setFilter] = useState('dogs');

  return (
    <Container backgroundColor={colors.gray}>
      <BackButton onPress={() => navigation.goBack()} />

      <Content>
        <Title marginBottom={20}>Para você</Title>
      </Content>

      <Content padding={0.1}>
        <FilterItems horizontal showsHorizontalScrollIndicator={false}>
          <FilterButton
            onPress={() => setFilter('dogs')}
            color={filter === 'dogs' && colors.yellow}
          >
            <DogIcon />
          </FilterButton>

          <FilterButton
            onPress={() => setFilter('cats')}
            color={filter === 'cats' && colors.yellow}
          >
            <CatIcon />
          </FilterButton>

          <FilterButton
            onPress={() => setFilter('birds')}
            color={filter === 'birds' && colors.yellow}
          >
            <BirdIcon />
          </FilterButton>

          <FilterButton
            onPress={() => setFilter('hamsters')}
            color={filter === 'hamsters' && colors.yellow}
          >
            <HamsterIcon />
          </FilterButton>

          <FilterButton
            onPress={() => setFilter('fishs')}
            color={filter === 'fishs' && colors.yellow}
          >
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

export default ForYouStore;
