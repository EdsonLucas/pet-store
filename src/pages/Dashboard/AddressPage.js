import React, { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import {
  ScrollView,
  HeaderContainer,
  Content,
  InputContainer,
  InputText,
  ButtonContainer,
  BoxItem,
  BackgroudImage,
  TextContainer,
} from '~/styles/dashboard/addresspage';
import { colors } from '~/styles/global';
import { Container, Title, Subtitle, Text } from '~/styles/global/general';

import BackButton from '~/components/Button/BackButton';
import Input from '~/components/Input/Input';
import OutlineButton from '~/components/Button/OutlineButton';
import ModalFull from '~/components/Modal/ModalFull';
import Spacer from '~/components/Spacer';
import Button from '~/components/Button/Button';
import SelectButton from '~/components/Button/SelectButton';
import StateList from '~/data/state';
import CitiesList from '~/data/cities';

import AddressHouseIcon from '~/assets/icons/address-house.svg';

export default function AddressPage({ navigation }) {
  const [step, setStep] = useState(1);
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

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      {step === 1 && (
        <Container>
          <BackButton onPress={() => navigation.goBack()} />

          <ScrollView>
            <HeaderContainer>
              <Title marginBottom={20}>Meus Endereços</Title>
            </HeaderContainer>

            <Content>
              <BoxItem borderColor={colors.grayMedium}>
                <BackgroudImage color={colors.transparent}>
                  <AddressHouseIcon color={colors.grayMedium} />
                </BackgroudImage>

                <TextContainer>
                  <Text color={colors.black} marginTop={16}>
                    R. Vicente Santório Fantini, 80
                  </Text>
                  <Text>Campo Grande, Cariacica - ES</Text>
                </TextContainer>
              </BoxItem>
            </Content>
          </ScrollView>

          <ButtonContainer>
            <OutlineButton onPress={() => nextStep()} textColor={colors.blue}>
              Adicionar novo endereço
            </OutlineButton>
          </ButtonContainer>
        </Container>
      )}

      {step === 2 && (
        <>
          <Container>
            <BackButton onPress={() => prevStep()} />

            <ScrollView>
              <HeaderContainer>
                <Title marginBottom={20}>Meus Endereços</Title>
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
              <Button onPress={() => prevStep()}>Salvar</Button>
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
      )}
    </>
  );
}
