import React from 'react';
import { Image } from 'react-native';
import SelectButton from '~/components/Button/SelectButton';
import BackButton from '~/components/Button/BackButton';

import {
  BoxContainer,
  HeaderContainer,
  Content,
  BoxItem,
  BackgroudImage,
  TextContainer,
  AccordionTitleContainer,
  AccordionTitle,
} from '~/styles/dashboard/signature/signaturedetails';
import { colors } from '~/styles/global';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import OutlineButton from '~/components/Button/OutlineButton';

import GoldenFood from '~/assets/images/golden.png';
import Spacer from '~/components/Spacer';

const SignatureDetails = ({ navigation, route }) => {
  const { cartProducts } = route.params;

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} />

      <BoxContainer showsVerticalScrollIndicator={false}>
        <HeaderContainer>
          <Title marginBottom={20}>Minha assinatura</Title>

          <Text>
            Aqui você consegue verificar os detalhes da sua assinatura.
          </Text>
        </HeaderContainer>

        <Content>
          <SelectButton
            title='Peridiocidade da assinatura'
            onPress={() => {}}
            rightText='15 dias'
          />

          <SelectButton
            title='Endereço'
            onPress={() => {}}
            rightText='Rua Treze de Maio, 12 - São Geraldo - Cariacica - ES'
          />

          <SelectButton
            title='Forma de Pagamento'
            onPress={() => {}}
            rightText='•••• 7525'
          />
        </Content>

        {cartProducts.map((item) => (
          <>
            <AccordionTitleContainer key={Math.random()}>
              <AccordionTitle>Seus produtos</AccordionTitle>
            </AccordionTitleContainer>

            <BoxItem
              key={Math.random()}
              onPress={() => navigation.navigate('product')}
            >
              <BackgroudImage>
                <Image
                  source={{ uri: item.image }}
                  resizeMode='cover'
                  style={{
                    alignSelf: 'center',
                    width: 80,
                    height: 100,
                  }}
                />
              </BackgroudImage>

              <TextContainer>
                <Subtitle
                  style={{ width: '60%' }}
                  color={colors.black}
                  marginTop={16}
                >
                  {item.name}
                </Subtitle>

                <Subtitle color={colors.green} marginTop={25}>
                  {item.price}
                </Subtitle>
              </TextContainer>
            </BoxItem>
          </>
        ))}

        <Content>
          <OutlineButton
            borderColor={colors.red}
            textColor={colors.red}
            style={{ marginTop: 30 }}
          >
            Cancelar assinatura
          </OutlineButton>
        </Content>

        <Spacer />
      </BoxContainer>
    </Container>
  );
};

export default SignatureDetails;
