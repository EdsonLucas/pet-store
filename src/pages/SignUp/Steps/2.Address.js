import React, { useEffect, useRef, useState } from 'react';
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
import SelectButton from '~/components/Button/SelectButton';
import ModalFull from '~/components/Modal/ModalFull';
import StateList from '~/data/state';
import CitiesList from '~/data/cities';
import Spacer from '~/components/Spacer';

export default function Address({ prevStep, nextStep }) {
  const [cep, setCep] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [state, setState] = useState([]);
  const [city, setCity] = useState('');

  const [stateModalActive, setStateModalActive] = useState(false);
  const [cityModalActive, setCityModalActive] = useState(false);

  const neighborhoodRef = useRef(null);
  const streetRef = useRef(null);
  const numerRef = useRef(null);
  const complementRef = useRef(null);

  useEffect(() => {
    setCity('');
  }, [state]);

  return (
    <>
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

            <SelectButton
              title='Estado'
              onPress={() => setStateModalActive(true)}
              rightText={state.length === 0 ? 'Selecionar' : state.nome}
            />

            <SelectButton
              title='Cidade'
              onPress={() =>
                state.length === 0 ? {} : setCityModalActive(true)
              }
              rightText={city.length === 0 ? 'Selecionar' : city}
            />

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

      {stateModalActive && (
        <ModalFull
          isOpen={stateModalActive}
          onClosed={() => setStateModalActive(false)}
          onRequestClose={() => setStateModalActive(false)}
        >
          <Title>Selecione o Estado</Title>

          {StateList.map((item) => (
            <SelectButton
              key={item.id_uf}
              title={item.nome}
              onPress={() => {
                setState({ id: item.id_uf, nome: item.nome });
                setStateModalActive(false);
              }}
            />
          ))}

          <Spacer />
        </ModalFull>
      )}

      {cityModalActive && (
        <ModalFull
          isOpen={cityModalActive}
          onClosed={() => setStateModalActive(false)}
          onRequestClose={() => setStateModalActive(false)}
        >
          <Title>Selecione a Cidade</Title>

          {CitiesList.states[state.id - 1].cities.map((item) => (
            <SelectButton
              key={Math.random()}
              title={item}
              onPress={() => {
                setCity(item);
                setCityModalActive(false);
              }}
            />
          ))}

          <Spacer />
        </ModalFull>
      )}
    </>
  );
}
