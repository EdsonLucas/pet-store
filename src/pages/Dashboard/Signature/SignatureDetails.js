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

const SECTIONS = [
  {
    title: 'Rações',
    products: [
      {
        image: GoldenFood,
        name: 'Ração Golden para Gatos adultos - Sabor Carne',
        price: 'R$ 49,59',
      },
      {
        image: GoldenFood,
        name: 'Ração Golden para Gatos adultos - Sabor Carne',
        price: 'R$ 49,59',
      },
    ],
  },
];

const SignatureDetails = ({ navigation }) => {
  const renderContent = (section) => (
    <>
      {section.products.map((item) => (
        <BoxItem
          key={Math.random()}
          onPress={() => navigation.navigate('product')}
        >
          <BackgroudImage>
            <Image
              source={item.image}
              resizeMode='cover'
              style={{
                alignSelf: 'center',
                width: 60,
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
      ))}
    </>
  );

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
            rightText='Rua Vicente Santório Fantini, 80'
          />

          <SelectButton
            title='Forma de Pagamento'
            onPress={() => {}}
            rightText='•••• 5190'
          />
        </Content>

        {SECTIONS.map((item, index) => (
          <>
            <AccordionTitleContainer key={Math.random()}>
              <AccordionTitle>Seus produtos</AccordionTitle>
            </AccordionTitleContainer>

            {renderContent(item)}
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
