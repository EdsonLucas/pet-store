import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { colors, fonts, metrics } from '~/styles/global';
import { Subtitle } from '~/styles/global/general';

import {
  Container,
  Content,
  LogoContainer,
  ButtonContainer,
  DogImage,
} from '~/styles/signin/welcome';

import Button from '~/components/Button/Button';
import OutlineButton from '~/components/Button/OutlineButton';

import PetStorelogo from '~/assets/images/logo-main.svg';

const Welcome = ({ navigation }) => (
  <Container>
    <Content>
      <SafeAreaView />
      <StatusBar backgroundColor={colors.yellow} />

      <LogoContainer>
        <PetStorelogo
          width={metrics.widthPercentageToDP(50)}
          height={metrics.heightPercentageToDP(20)}
        />
        <Subtitle
          marginTop={-18}
          color={colors.brown}
          fontFamily={fonts.LinotteBold}
        >
          PET STORE
        </Subtitle>
      </LogoContainer>

      <Subtitle
        color={colors.brown}
        textAlign='center'
        marginLeft={55}
        marginRight={55}
      >
        Compre na Pet Store e gaste o seu tempo com quem sempre está ao seu lado
      </Subtitle>

      <ButtonContainer>
        <Button onPress={() => {}}>Visitante</Button>

        <OutlineButton onPress={() => {}}>Já sou cliente</OutlineButton>
      </ButtonContainer>
    </Content>

    <DogImage />
  </Container>
);

export default Welcome;
