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
} from '~/styles/dashboard/paymentform';
import { colors } from '~/styles/global';
import { Container, Title, Subtitle, Text } from '~/styles/global/general';

import CreditCardIcon from '~/assets/icons/credit-card.svg';

import BackButton from '~/components/Button/BackButton';
import Input from '~/components/Input/Input';
import OutlineButton from '~/components/Button/OutlineButton';
import ModalFull from '~/components/Modal/ModalFull';
import Spacer from '~/components/Spacer';
import Button from '~/components/Button/Button';

export default function PaymentForm({ navigation }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [titularName, setTitularName] = useState('');

  const [newCardModal, setNewCardModal] = useState(false);

  const expirationDateRef = useRef(null);
  const cvvRef = useRef(null);
  const titularNameRef = useRef(null);

  return (
    <>
      <Container>
        <BackButton onPress={() => navigation.goBack()} />

        <ScrollView>
          <HeaderContainer>
            <Title marginBottom={20}>Formas de Pagamento</Title>
          </HeaderContainer>

          <Content>
            <BoxItem borderColor={colors.grayMedium}>
              <BackgroudImage color={colors.transparent}>
                <CreditCardIcon />
              </BackgroudImage>

              <TextContainer>
                <Text color={colors.black} marginTop={16}>
                  Mastercard • Crédito
                </Text>
                <Text>•••• 7525</Text>
              </TextContainer>
            </BoxItem>
          </Content>
        </ScrollView>

        <ButtonContainer>
          <OutlineButton
            onPress={() => setNewCardModal(true)}
            textColor={colors.blue}
          >
            Adicionar novo cartão
          </OutlineButton>
        </ButtonContainer>
      </Container>

      {newCardModal && (
        <ModalFull
          isOpen={newCardModal}
          onClosed={() => setNewCardModal(false)}
          onRequestClose={() => setNewCardModal(false)}
        >
          <Title marginBottom={20}>Registrar novo cartão</Title>

          <Content
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            paddingHorizontal={0.1}
          >
            <InputContainer>
              <InputText>Número do Cartão</InputText>
              <Input
                placeholder=''
                returnKeyType='next'
                keyboardType='number-pad'
                value={cardNumber}
                onChangeText={(text) => {
                  setCardNumber(text.trim());
                }}
                onSubmitEditing={() => expirationDateRef.current.focus()}
              />
            </InputContainer>

            <InputContainer>
              <InputText>Validade</InputText>
              <Input
                ref={expirationDateRef}
                placeholder='Validade'
                keyboardType='number-pad'
                returnKeyType='next'
                value={expirationDate}
                onChangeText={(text) => {
                  setExpirationDate(text.trim());
                }}
                onSubmitEditing={() => cvvRef.current.focus()}
              />
            </InputContainer>

            <InputContainer>
              <InputText>CVV</InputText>
              <Input
                ref={cvvRef}
                placeholder='Nome completo da Rua/Av'
                keyboardType='number-pad'
                returnKeyType='next'
                value={cvv}
                onChangeText={(text) => {
                  setCvv(text);
                }}
                onSubmitEditing={() => titularNameRef.current.focus()}
              />
            </InputContainer>

            <InputContainer>
              <InputText>Nome do titular</InputText>
              <Input
                ref={titularNameRef}
                placeholder='0000'
                keyboardType='number-pad'
                returnKeyType='done'
                value={titularName}
                onChangeText={(text) => {
                  setTitularName(text.trim());
                }}
                onSubmitEditing={() => {}}
              />
            </InputContainer>
          </Content>

          <ButtonContainer paddingHorizontal={0.1}>
            <Button onPress={() => setNewCardModal(false)}>Salvar</Button>
          </ButtonContainer>

          <Spacer />
        </ModalFull>
      )}
    </>
  );
}
