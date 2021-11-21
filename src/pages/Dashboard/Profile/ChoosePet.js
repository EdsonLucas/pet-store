import React, { useRef, useState } from 'react';
import { Platform } from 'react-native';
import {
  ScrollView,
  HeaderContainer,
  ButtonContainer,
  BoxContainer,
  Content,
} from '~/styles/signup/register';
import { colors } from '~/styles/global';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import BackButton from '~/components/Button/BackButton';
import Button from '~/components/Button/Button';
import Box from '~/components/Box';
import SelectBox from '~/components/SelectBox';

import DogImage from '~/assets/images/dog.svg';
import CatImage from '~/assets/images/cat.svg';
import BirdImage from '~/assets/images/bird.svg';
import BunnyImage from '~/assets/images/bunny.svg';
import TurtleImage from '~/assets/images/turtle.svg';
import FishImage from '~/assets/images/fish.svg';
import Spacer from '~/components/Spacer';

export default function ChoosePet({ navigation }) {
  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} />

      <ScrollView>
        <HeaderContainer>
          <Title marginBottom={20}>Selecione seu Pet</Title>

          <Text>
            Escolha uma ou mais categorias de bichinhos que você tenha.
          </Text>
        </HeaderContainer>

        <BoxContainer>
          <Box
            image={<DogImage />}
            title='Cães'
            marginTitleTop={15}
            boxShadow
          />

          <Box
            image={<CatImage />}
            title='Gatos'
            marginTitleTop={15}
            boxShadow
          />
        </BoxContainer>

        <Content>
          <Subtitle>Outras Categorias</Subtitle>

          <SelectBox
            image={<BirdImage />}
            title='Aves'
            subtitle='Pássaros, Galinhas, Patos, Etc.'
          />

          <SelectBox
            image={<BunnyImage />}
            title='Roedores'
            subtitle='Hamster, Coelhos, Ratos, Etc.'
          />

          <SelectBox
            image={<TurtleImage />}
            title='Répteis'
            subtitle='Iguanas, Tartarugas, Cobras, Etc.'
          />

          <SelectBox
            image={<FishImage />}
            title='Peixes'
            subtitle='Cavalo Marinho, Caragueijo, Etc. '
          />
        </Content>

        <Spacer />
      </ScrollView>

      <ButtonContainer>
        <Button onPress={() => {}}>Salvar</Button>
      </ButtonContainer>
    </Container>
  );
}
