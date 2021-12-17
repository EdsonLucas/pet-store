import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, metrics } from '~/styles/global';

import {
  Container,
  Content,
  ButtonContainer,
  DogImage,
  SubtitleText,
  ScrollView,
} from '~/styles/signin/welcome';

import Button from '~/components/Button/Button';
import OutlineButton from '~/components/Button/OutlineButton';
import Logo from '~/components/Logo';

import useUserStore from '~/store/user.store';

const Welcome = ({ navigation }) => {
  const { fetchVisitantLoading } = useUserStore();

  const onSubmit = async () => {
    await fetchVisitantLoading();
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Content>
          <SafeAreaView />
          <StatusBar backgroundColor={colors.yellow} />

          <Logo width={50} height={20} fontSize={20} marginTitleTop={-15} />

          <SubtitleText>
            Compre na Pet Store e gaste o seu tempo com quem sempre está ao seu
            lado
          </SubtitleText>

          <ButtonContainer>
            <Button onPress={() => onSubmit()}>Visitante</Button>

            <OutlineButton
              onPress={() => navigation.navigate('login')}
              borderButtonColor={colors.white}
              textColor={colors.white}
            >
              Já sou cliente
            </OutlineButton>
          </ButtonContainer>
        </Content>
      </ScrollView>

      <DogImage />
    </Container>
  );
};

export default Welcome;
