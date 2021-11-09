import React from 'react';
import {
  Content,
  UserContainer,
  UserAvatar,
  UserTitle,
  CategoryContainer,
  CategoryTitle,
} from '~/styles/dashboard/profile';
import { colors } from '~/styles/global';
import { Container, Title } from '~/styles/global/general';

import SelecButton from '~/components/Button/SelectButton';
import OutlineButton from '~/components/Button/OutlineButton';
import Spacer from '~/components/Spacer';

function Profile() {
  return (
    <Container backgroundColor={colors.gray}>
      <Content>
        <Title>Minha Conta</Title>

        <UserContainer>
          <UserAvatar />

          <UserTitle>Olá, Márcia!</UserTitle>
        </UserContainer>

        <CategoryContainer>
          <CategoryTitle>Configurações</CategoryTitle>
        </CategoryContainer>

        <SelecButton
          title='Meus dados'
          colorTitle={colors.black}
          fontTitle={15}
          subtitle='Minhas informações da conta'
          onPress={() => {}}
          hideRightText
        />
        <SelecButton
          title='Endereços'
          colorTitle={colors.black}
          fontTitle={15}
          subtitle='Meus endereços de entrega'
          onPress={() => {}}
          hideRightText
        />
        <SelecButton
          title='Formas de Pagamento'
          colorTitle={colors.black}
          fontTitle={15}
          subtitle='Minhas formas de pagamento'
          onPress={() => {}}
          hideRightText
        />

        <CategoryContainer>
          <CategoryTitle>Informações</CategoryTitle>
        </CategoryContainer>

        <SelecButton
          title='Ajuda'
          colorTitle={colors.black}
          fontTitle={15}
          subtitle='Precisa de ajuda? Fala com a gente!'
          onPress={() => {}}
          hideRightText
        />
        <SelecButton
          title='Sobre o app'
          colorTitle={colors.black}
          fontTitle={15}
          onPress={() => {}}
          hideRightText
        />

        <OutlineButton
          borderColor={colors.red}
          textColor={colors.red}
          style={{ marginTop: 30 }}
        >
          Sair do App
        </OutlineButton>

        <Spacer />
      </Content>
    </Container>
  );
}

export default Profile;
