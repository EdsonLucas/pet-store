import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {
  Header,
  BackContainer,
  BackButtonContainer,
  StoreContainer,
  TextStoreContainer,
  AccordionTitleContainer,
  AccordionTitle,
  BoxContainer,
  BoxItem,
  BackgroudImage,
  TextContainer,
} from '~/styles/dashboard/product/pagestore';
import { Container, Title, Subtitle, Text } from '~/styles/global/general';

import AnimalShopLogo from '~/assets/images/animal-shop-logo.png';
import GoldenFood from '~/assets/images/golden.png';

import BackButton from '~/components/Button/BackButton';
import { colors, metrics } from '~/styles/global';

const SECTIONS = [
  {
    title: 'Promoções',
    products: [
      {
        image: GoldenFood,
        name: 'Ração Golden para Gatos adultos - Sabor Carne',
        price: 'R$ 49,59',
      },
    ],
  },
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

const PageStore = ({ navigation }) => {
  const [activeSections, setActiveSections] = useState([]);
  const [productIsVisible, setProductIsVisible] = useState('');

  const renderHeader = (section) => (
    <AccordionTitleContainer>
      <AccordionTitle>{section.title}</AccordionTitle>
    </AccordionTitleContainer>
  );

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
            <Subtitle color={colors.black} marginTop={16}>
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

  const updateSections = (item) => {
    setActiveSections(item);
  };

  return (
    <>
      <BoxContainer showsVerticalScrollIndicator={false}>
        <Header>
          <BackContainer>
            <BackButtonContainer>
              <BackButton
                style={{ marginLeft: 9, marginTop: 19 }}
                onPress={() => navigation.goBack()}
              />
            </BackButtonContainer>
          </BackContainer>

          <StoreContainer>
            <TextStoreContainer>
              <Title>Animal Shop</Title>
              <Text>Produtos variados • 5 km</Text>
            </TextStoreContainer>

            <Image
              source={AnimalShopLogo}
              resizeMode='cover'
              style={{
                height: 65,
                width: 68,
              }}
            />
          </StoreContainer>

          <Text marginLeft={metrics.basePadding}>
            Hoje, 40 - 50 min • Entrega Grátis
          </Text>
        </Header>

        {/* <Accordion
          sections={SECTIONS}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={(item) => updateSections(item)}
          expandMultiple
          underlayColor={colors.transparent}
          keyExtractor={(item, indice) => console.log(indice)}
        /> */}

        {SECTIONS.map((item, index) => (
          <>
            <AccordionTitleContainer
              key={Math.random()}
              onPress={() => setProductIsVisible(item[index])}
            >
              <AccordionTitle>{item.title}</AccordionTitle>
            </AccordionTitleContainer>

            {productIsVisible === item[index] && renderContent(item)}
          </>
        ))}
      </BoxContainer>
      <Container flex={0.1} backgroundColor={colors.white} />
    </>
  );
};

export default PageStore;
