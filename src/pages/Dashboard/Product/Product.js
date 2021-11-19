import React from 'react';
import { Image } from 'react-native';
import {
  Content,
  Header,
  HeaderProduct,
  BoxContainer,
  BoxItem,
  BackgroudImage,
  TextContainer,
  DescriptionContainer,
  ButtonContainer,
} from '~/styles/dashboard/product/product';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import GoldenFood from '~/assets/images/golden.png';

import { colors } from '~/styles/global';

import BackButton from '~/components/Button/BackButton';
import Spacer from '~/components/Spacer';
import Button from '~/components/Button/Button';

function Product({ navigation }) {
  return (
    <>
      <Container />
      <Header>
        <BackButton
          style={{ marginBottom: 10 }}
          onPress={() => navigation.goBack()}
        />
      </Header>

      <BoxContainer showsVerticalScrollIndicator={false}>
        <HeaderProduct>
          <BackgroudImage>
            <Image
              source={GoldenFood}
              resizeMode='cover'
              style={{
                alignSelf: 'center',
                width: 90,
                height: 160,
              }}
            />
          </BackgroudImage>

          <TextContainer>
            <Subtitle textAlign='center' color={colors.black} marginTop={16}>
              Ração Golden para Gatos adultos - Sabor Carne
            </Subtitle>

            <Title marginTop={25} marginBottom={20}>
              R$ 49,59
            </Title>
          </TextContainer>

          <Button>Adicionar ao carinho</Button>
        </HeaderProduct>

        <Content>
          <BoxItem marginTop={20}>
            <Subtitle color={colors.black} marginBottom={10}>
              Descrição
            </Subtitle>

            <Text> - Indicada para cães adultos;</Text>
            <Text> - Específica para pets de raças pequenas;</Text>
            <Text> - Contém nutrientes, vitaminas e minerais;</Text>
            <Text>
              - Fibras naturais proporciona fácil digestão e fezes firmes;
            </Text>
            <Text> - Enriquecida com ômega 6, proteínas e aminoácidos,</Text>
            <Text>
              - Disponível em embalagens de 1 kg, 3 kg, 10,1 kg, 15 kg e 20 kg.
            </Text>
          </BoxItem>

          <BoxItem paddingHorizontal={0.1}>
            <Subtitle color={colors.black} marginLeft={23} marginBottom={10}>
              Especificações
            </Subtitle>

            <DescriptionContainer>
              <Text marginLeft={23}>Linha</Text>

              <Text marginRight={23} color={colors.grayRegular}>
                Premium
              </Text>
            </DescriptionContainer>

            <DescriptionContainer>
              <Text marginLeft={23}>Linha</Text>

              <Text marginRight={23} color={colors.grayRegular}>
                Premium
              </Text>
            </DescriptionContainer>

            <DescriptionContainer>
              <Text marginLeft={23}>Linha</Text>

              <Text marginRight={23} color={colors.grayRegular}>
                Premium
              </Text>
            </DescriptionContainer>

            <DescriptionContainer>
              <Text marginLeft={23}>Linha</Text>

              <Text marginRight={23} color={colors.grayRegular}>
                Premium
              </Text>
            </DescriptionContainer>
          </BoxItem>
        </Content>

        <ButtonContainer>
          <Button>Adicionar ao carinho</Button>
        </ButtonContainer>
        <Spacer height={50} />
      </BoxContainer>
    </>
  );
}

export default Product;
