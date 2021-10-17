import React, { useRef, useState } from 'react';
import { Platform } from 'react-native';
import {
  ScrollView,
  HeaderContainer,
  ButtonContainer,
  BoxContainer,
  Box,
  Content,
  SelectBox,
  TextContainer,
} from '~/styles/signup/register';
import { colors } from '~/styles/global';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import BackButton from '~/components/Button/BackButton';
import Button from '~/components/Button/Button';

import DogImage from '~/assets/images/dog.svg';
import CatImage from '~/assets/images/cat.svg';
import BirdImage from '~/assets/images/bird.svg';
import BunnyImage from '~/assets/images/bunny.svg';
import TurtleImage from '~/assets/images/turtle.svg';
import FishImage from '~/assets/images/fish.svg';

export default function ChoosePet({ prevStep, navigation }) {
  return (
    <Container>
      <BackButton onPress={() => prevStep()} />

      <ScrollView>
        <HeaderContainer>
          <Title marginBottom={20}>Selecione seu Pet</Title>

          <Text>
            Escolha uma ou mais categorias de bichinhos que você tenha.
          </Text>
        </HeaderContainer>

        <BoxContainer>
          <Box>
            <DogImage />

            <Subtitle color={colors.grayMedium} marginTop={15}>
              Cães
            </Subtitle>
          </Box>

          <Box>
            <CatImage />

            <Subtitle color={colors.grayMedium} marginTop={15}>
              Gatos
            </Subtitle>
          </Box>
        </BoxContainer>

        <Content>
          <Subtitle>Outras Categorias</Subtitle>

          <SelectBox>
            <BirdImage />

            <TextContainer>
              <Subtitle color={colors.grayMedium}>Aves</Subtitle>
              <Text>Hamster, Coelhos, Ratos, Etc.</Text>
            </TextContainer>
          </SelectBox>

          <SelectBox>
            <BunnyImage />

            <TextContainer>
              <Subtitle color={colors.grayMedium}>Roedores</Subtitle>
              <Text>Pássaros, Galinhas, Patos, Etc.</Text>
            </TextContainer>
          </SelectBox>

          <SelectBox>
            <TurtleImage />

            <TextContainer>
              <Subtitle color={colors.grayMedium}>Répteis</Subtitle>
              <Text>Iguanas, Tartarugas, Cobras, Etc.</Text>
            </TextContainer>
          </SelectBox>

          <SelectBox>
            <FishImage />

            <TextContainer>
              <Subtitle color={colors.grayMedium}>Peixes</Subtitle>
            </TextContainer>
          </SelectBox>
        </Content>
      </ScrollView>

      <ButtonContainer>
        <Button onPress={() => {}}>Concluir</Button>
      </ButtonContainer>
    </Container>
  );
}
