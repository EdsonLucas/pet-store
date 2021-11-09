import React from 'react';
import { Image } from 'react-native';
import {
  Content,
  FilterItems,
  FilterButton,
  BoxContainer,
  BoxItem,
  BackgroudImage,
  TextContainer,
  RowTextContainer,
} from '~/styles/dashboard/boxsearch';
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
import Spacer from '~/components/Spacer';

function Store({ navigation }) {
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
        </FilterItems>
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

        <Spacer height={20} />
      </BoxContainer>
    </Container>
  );
}

export default Store;
