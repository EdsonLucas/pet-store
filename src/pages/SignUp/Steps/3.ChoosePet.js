import React, { useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

import useUserStore from '~/store/user.store';

export default function ChoosePet({ prevStep, navigation }) {
  const [selectDogs, setSelectDogs] = useState({ title: '', active: false });
  const [selectCats, setSelectCats] = useState({ title: '', active: false });
  const [selectBirds, setSelectBirds] = useState({ title: '', active: false });
  const [selectsRodents, setSelectRodents] = useState({
    title: '',
    active: false,
  });
  const [selectsReptiles, setSelectReptiles] = useState({
    title: '',
    active: false,
  });
  const [selectFish, setSelectFish] = useState({ title: '', active: false });

  const { fetchLoading } = useUserStore();

  const onSubmit = async () => {
    await AsyncStorage.setItem('isAuthenticated', 'true');

    await fetchLoading();
  };

  return (
    <Container>
      <BackButton onPress={() => prevStep()} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderContainer>
          <Title marginBottom={20}>Selecione seu Pet</Title>

          <Text>
            Escolha uma ou mais categorias de bichinhos que você tenha.
          </Text>
        </HeaderContainer>

        <BoxContainer>
          <Box
            borderColor={selectDogs.active && colors.yellow}
            onPress={() =>
              setSelectDogs({ title: 'Cães', active: !selectDogs.active })
            }
            image={<DogImage />}
            title='Cães'
            marginTitleTop={15}
            boxShadow
          />

          <Box
            borderColor={selectCats.active && colors.yellow}
            onPress={() =>
              setSelectCats({ title: 'Gatos', active: !selectCats.active })
            }
            image={<CatImage />}
            title='Gatos'
            marginTitleTop={15}
            boxShadow
          />
        </BoxContainer>

        <Content>
          <Subtitle>Outras Categorias</Subtitle>

          <SelectBox
            borderColor={selectBirds.active && colors.yellow}
            onPress={() =>
              setSelectBirds({ title: 'Aves', active: !selectBirds.active })
            }
            image={<BirdImage />}
            title='Aves'
            subtitle='Pássaros, Galinhas, Patos, Etc.'
          />

          <SelectBox
            borderColor={selectsRodents.active && colors.yellow}
            onPress={() =>
              setSelectRodents({
                title: 'Roedores',
                active: !selectsRodents.active,
              })
            }
            image={<BunnyImage />}
            title='Roedores'
            subtitle='Hamster, Coelhos, Ratos, Etc.'
          />

          <SelectBox
            borderColor={selectsReptiles.active && colors.yellow}
            onPress={() =>
              setSelectReptiles({
                title: 'Répteis',
                active: !selectsReptiles.active,
              })
            }
            image={<TurtleImage />}
            title='Répteis'
            subtitle='Iguanas, Tartarugas, Cobras, Etc.'
          />

          <SelectBox
            borderColor={selectFish.active && colors.yellow}
            onPress={() =>
              setSelectFish({ title: 'Peixes', active: !selectFish.active })
            }
            image={<FishImage />}
            title='Peixes'
            subtitle='Cavalo Marinho, Caragueijo, Etc. '
          />
        </Content>

        <Spacer />
      </ScrollView>

      <ButtonContainer>
        <Button onPress={() => onSubmit()}>Concluir</Button>
      </ButtonContainer>
    </Container>
  );
}
