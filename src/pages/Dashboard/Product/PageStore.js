import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
// import Accordion from 'react-native-collapsible/Accordion';
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

import BackButton from '~/components/Button/BackButton';
import { colors, metrics } from '~/styles/global';

const PageStore = ({ navigation, route }) => {
  // const [activeSections, setActiveSections] = useState([]);

  // const renderHeader = (section) => (
  //   <AccordionTitleContainer>
  //     <AccordionTitle>{section.title}</AccordionTitle>
  //   </AccordionTitleContainer>
  // );

  const { item } = route.params;

  const renderContent = (section) => (
    <>
      {section.map((product) => (
        <BoxItem
          key={Math.random()}
          onPress={() => navigation.navigate('product', { product })}
        >
          <BackgroudImage>
            <Image
              source={{ uri: product.image }}
              resizeMode='cover'
              style={{
                alignSelf: 'center',
                width: 80,
                height: 100,
              }}
            />
          </BackgroudImage>

          <TextContainer>
            <Subtitle color={colors.black} marginTop={16}>
              {product.name}
            </Subtitle>

            <Subtitle color={colors.green} marginTop={25}>
              R$ {product.price}
            </Subtitle>
          </TextContainer>
        </BoxItem>
      ))}
    </>
  );

  // const updateSections = (item) => {
  //   setActiveSections(item);
  // };

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
              <Title>{item.name}</Title>
              <Text>
                {item.category} • {item.distance}
              </Text>
            </TextStoreContainer>

            <Image
              source={item.avatar}
              resizeMode='cover'
              style={{
                height: item.heightAvatar,
                width: item.widthAvatar,
              }}
            />
          </StoreContainer>

          <Text marginLeft={metrics.basePadding}>
            Hoje, 40 - 50 min • {item.deliveryPrice}
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

        {item.products.map((list, index) => (
          <>
            <AccordionTitleContainer key={Math.random()}>
              <AccordionTitle>{list.productListTitle}</AccordionTitle>
            </AccordionTitleContainer>

            {renderContent(list.productList)}
          </>
        ))}
      </BoxContainer>
      <Container flex={0.1} backgroundColor={colors.white} />
    </>
  );
};

export default PageStore;
