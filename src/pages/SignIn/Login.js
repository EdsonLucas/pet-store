import React, { useState, useRef } from 'react';
import { KeyboardAvoidingView, Platform, Image } from 'react-native';

import {
  Container,
  Food,
  Header,
  Food2,
  Content,
  InputContainer,
  LastContainer,
  ButtonContainer,
  TitleText,
  InputText,
  SimpleText,
  ForgotContainer,
} from '~/styles/signin/login';
import { colors } from '~/styles/global';

import Input from '~/components/Input/Input';
import Button from '~/components/Button/Button';
import OutlineButton from '~/components/Button/OutlineButton';
import Logo from '~/components/Logo';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');

  const passwordRef = useRef();

  return (
    <Container>
      <Food source={require('~/assets/images/food.png')} />
      <Header>
        <TitleText>Bem vindo ao</TitleText>

        <Logo width={30} height={20} />
      </Header>
      <Food2 source={require('~/assets/images/food-2.png')} />

      <Content>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{
            flex: 1,
          }}
        >
          <InputContainer marginBottom={25}>
            <InputText>E-mail</InputText>
            <Input
              returnKeyType='next'
              autoCapitalize='none'
              keyboardType='email-address'
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={(text) => {
                setEmail(text.trim());
              }}
            />
          </InputContainer>

          <InputContainer>
            <InputText>Password</InputText>
            <Input
              ref={passwordRef}
              returnKeyType='done'
              onSubmitEditing={() => {}}
              value={password}
              onChangeText={(text) => {
                setPassoword(text.trim());
              }}
              secureTextEntry
            />
            <ForgotContainer>
              <OutlineButton
                borderButtonColor={colors.white}
                onPress={() => navigation.navigate('register')}
              >
                <SimpleText>Cadastre-se</SimpleText>
              </OutlineButton>

              <OutlineButton
                borderButtonColor={colors.white}
                onPress={() => {}}
              >
                <SimpleText>Esqueceu sua senha?</SimpleText>
              </OutlineButton>
            </ForgotContainer>
          </InputContainer>

          <LastContainer>
            <ButtonContainer>
              <Button buttonColor={colors.yellow} onPress={() => {}}>
                Entrar
              </Button>
            </ButtonContainer>

            <SimpleText>
              Ao continuar, você aceita nossos {'\n'}
              <SimpleText>Termos e condições</SimpleText>
            </SimpleText>
          </LastContainer>
        </KeyboardAvoidingView>
      </Content>
    </Container>
  );
};

export default Login;
