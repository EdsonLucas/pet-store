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
import { colors } from '~/styles/global';
import { Container, Title, Text } from '~/styles/global/general';

import BackButton from '~/components/Button/BackButton';
import Input from '~/components/Input/Input';
import OutlineButton from '~/components/Button/OutlineButton';
import SelecButton from '~/components/Button/SelectButton';

export default function Address({ prevStep, nextStep }) {
  const [cep, setCep] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');

  const neighborhoodRef = useRef(null);
  const streetRef = useRef(null);
  const numerRef = useRef(null);
  const complementRef = useRef(null);

  return (
    <Container>
      <BackButton onPress={() => prevStep()} />

      <ScrollView>
        <HeaderContainer>
          <Title marginBottom={20}>Cadastro de Endereço</Title>

          <Text>Cadastre o endereço para que você receba teus produtos.</Text>
        </HeaderContainer>

        <Content behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <InputContainer>
            <InputText>CEP</InputText>
            <Input
              placeholder='00.000-00'
              returnKeyType='next'
              keyboardType='number-pad'
              value={cep}
              onChangeText={(text) => {
                setCep(text.trim());
              }}
              onSubmitEditing={() => neighborhoodRef.current.focus()}
            />
          </InputContainer>

          <SelecButton title='Estado' onPress={() => {}} />

          <SelecButton title='Cidade' onPress={() => {}} />

          <InputContainer>
            <InputText>Bairro</InputText>
            <Input
              ref={neighborhoodRef}
              placeholder='Nome do bairro'
              keyboardType='email-address'
              returnKeyType='next'
              value={neighborhood}
              onChangeText={(text) => {
                setNeighborhood(text.trim());
              }}
              onSubmitEditing={() => streetRef.current.focus()}
            />
          </InputContainer>

          <InputContainer>
            <InputText>Endereço</InputText>
            <Input
              ref={streetRef}
              placeholder='Nome completo da Rua/Av'
              keyboardType='number-pad'
              returnKeyType='next'
              value={street}
              onChangeText={(text) => {
                setStreet(text);
              }}
              onSubmitEditing={() => numerRef.current.focus()}
            />
          </InputContainer>

          <InputContainer>
            <InputText>Número</InputText>
            <Input
              ref={numerRef}
              placeholder='0000'
              keyboardType='number-pad'
              returnKeyType='next'
              value={number}
              onChangeText={(text) => {
                setNumber(text.trim());
              }}
              onSubmitEditing={() => {}}
            />
          </InputContainer>

          <InputContainer>
            <InputText>Complemento</InputText>
            <Input
              ref={complementRef}
              placeholder='0000'
              keyboardType='number-pad'
              returnKeyType='next'
              value={complement}
              onChangeText={(text) => {
                setComplement(text.trim());
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
