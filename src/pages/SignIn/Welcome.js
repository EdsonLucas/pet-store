import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { colors, metrics } from '~/styles/global';

import {
  Container,
  Content,
  ButtonContainer,
  DogImage,
  SubtitleText,
} from '~/styles/signin/welcome';

import Button from '~/components/Button/Button';
import OutlineButton from '~/components/Button/OutlineButton';
import Logo from '~/components/Logo';

const Welcome = ({ navigation }) => (
  <Container>
    <Content>
      <SafeAreaView />
      <StatusBar backgroundColor={colors.yellow} />

      <Logo width={50} height={20} fontSize={20} marginTitleTop={-15} />

      <SubtitleText>
        Compre na Pet Store e gaste o seu tempo com quem sempre está ao seu lado
      </SubtitleText>

      <ButtonContainer>
        <Button onPress={() => {}}>Visitante</Button>

        <OutlineButton
          onPress={() => navigation.navigate('login')}
          borderButtonColor={colors.white}
          textColor={colors.white}
        >
          Já sou cliente
        </OutlineButton>
      </ButtonContainer>
    </Content>

    <DogImage />
  </Container>
);

export default Welcome;
