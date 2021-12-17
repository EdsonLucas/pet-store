import React, { useRef, useState } from 'react';
import { Platform } from 'react-native';
import {
  ScrollView,
  HeaderContainer,
  Content,
  InputContainer,
  InputText,
  ButtonContainer,
} from '~/styles/signup/register';
import { Container, Title, Text } from '~/styles/global/general';

import BackButton from '~/components/Button/BackButton';
import Input from '~/components/Input/Input';
import OutlineButton from '~/components/Button/OutlineButton';
import { colors } from '~/styles/global';

export default function PersonalData({ navigation, nextStep }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('');

  const emailRef = useRef(null);
  const passRef = useRef(null);
  const phoneRef = useRef(null);
  const birthRef = useRef(null);

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} />

      <ScrollView>
        <HeaderContainer>
          <Title marginBottom={20}>Dados Pessoais</Title>

          <Text>
            Todos os dados solicitados devem ser preenchidos corretamente para
            mantermos você em segurança.
          </Text>
        </HeaderContainer>

        <Content behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <InputContainer>
            <InputText>Nome Completo</InputText>
            <Input
              placeholder='Qual seu nome de registro?'
              returnKeyType='next'
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
              onSubmitEditing={() => emailRef.current.focus()}
            />
          </InputContainer>

          <InputContainer>
            <InputText>E-mail</InputText>
            <Input
              ref={emailRef}
              autoCapitalize='none'
              keyboardType='email-address'
              returnKeyType='next'
              value={email}
              onChangeText={(text) => {
                setEmail(text.trim());
              }}
              onSubmitEditing={() => passRef.current.focus()}
            />
          </InputContainer>

          <InputContainer>
            <InputText>Senha</InputText>
            <Input
              ref={passRef}
              returnKeyType='next'
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              onSubmitEditing={() => phoneRef.current.focus()}
              secureTextEntry
            />
          </InputContainer>

          <InputContainer>
            <InputText>Telefone</InputText>
            <Input
              ref={phoneRef}
              placeholder='+55'
              keyboardType='number-pad'
              returnKeyType='next'
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
              }}
              onSubmitEditing={() => birthRef.current.focus()}
            />
          </InputContainer>

          <InputContainer>
            <InputText>Data de Nascimento</InputText>
            <Input
              ref={birthRef}
              placeholder='dd/mm/aaaa'
              keyboardType='number-pad'
              returnKeyType='next'
              value={birth}
              onChangeText={(text) => {
                setBirth(text.trim());
              }}
              onSubmitEditing={() => {}}
            />
          </InputContainer>
        </Content>
      </ScrollView>

      <ButtonContainer>
        <OutlineButton onPress={() => nextStep()} textColor={colors.blue}>
          Próximo
        </OutlineButton>
      </ButtonContainer>
    </Container>
  );
}
