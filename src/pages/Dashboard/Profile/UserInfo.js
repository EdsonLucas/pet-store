import React from 'react';

import SelectButton from '~/components/Button/SelectButton';
import BackButton from '~/components/Button/BackButton';

import {
  ScrollView,
  HeaderContainer,
  Content,
} from '~/styles/dashboard/profile/userinfo';

import { Container, Title, Text } from '~/styles/global/general';

const UserInfo = ({ navigation }) => (
  <Container>
    <BackButton onPress={() => navigation.goBack()} />

    <ScrollView>
      <HeaderContainer>
        <Title marginBottom={20}>Meus Dados</Title>

        <Text>
          Aqui você consegue verificar e alterar os seus dados pessoais
          cadastrados.
        </Text>
      </HeaderContainer>

      <Content>
        <SelectButton title='Nome' onPress={() => {}} rightText='Márcia' />

        <SelectButton
          title='E-mail'
          onPress={() => {}}
          rightText='marcia@gmail.com'
        />

        <SelectButton title='Senha' onPress={() => {}} rightText='•••••••••' />

        <SelectButton
          title='Categorias de Pets selecionados'
          onPress={() => navigation.navigate('choose-pet')}
          rightText='Cães, Gatos, Aves, Roedores, Répteis e Peixes'
        />
      </Content>
    </ScrollView>
  </Container>
);

export default UserInfo;
