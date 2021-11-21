import React from 'react';
import {
  Content,
  UserContainer,
  UserAvatar,
  UserTitle,
  CategoryContainer,
  CategoryTitle,
} from '~/styles/dashboard/profile/profile';
import { colors } from '~/styles/global';
import { Container, Title } from '~/styles/global/general';

import SelectButton from '~/components/Button/SelectButton';
import OutlineButton from '~/components/Button/OutlineButton';
import Spacer from '~/components/Spacer';

function Profile({ navigation }) {
  return (
    <Container backgroundColor={colors.gray}>
      <Content showsVerticalScrollIndicator={false}>
        <Title>Minha Conta</Title>

        <UserContainer>
          <UserTitle>Olá, Márcia!</UserTitle>
        </UserContainer>

        <CategoryContainer>
          <CategoryTitle>Configurações</CategoryTitle>
        </CategoryContainer>

        <SelectButton
          title='Meus dados'
          colorTitle={colors.black}
          fontTitle={15}
          subtitle='Minhas informações da conta'
          onPress={() => navigation.navigate('user-info')}
          hideRightText
        />
        <SelectButton
          title='Endereços'
          colorTitle={colors.black}
          fontTitle={15}
          subtitle='Meus endereços de entrega'
          onPress={() => navigation.navigate('address-page')}
          hideRightText
        />
        <SelectButton
          title='Formas de Pagamento'
          colorTitle={colors.black}
          fontTitle={15}
          subtitle='Minhas formas de pagamento'
          onPress={() => navigation.navigate('payment-form')}
          hideRightText
        />

        <CategoryContainer>
          <CategoryTitle>Informações</CategoryTitle>
        </CategoryContainer>

        <SelectButton
          title='Ajuda'
          colorTitle={colors.black}
          fontTitle={15}
          subtitle='Precisa de ajuda? Fala com a gente!'
          onPress={() => {}}
          hideRightText
        />
        <SelectButton
          title='Sobre o app'
          colorTitle={colors.black}
          fontTitle={15}
          onPress={() => navigation.navigate('about')}
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
