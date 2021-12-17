import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  Content,
  SearchTitle,
  BoxContainer,
} from '~/styles/dashboard/search/search';
import { Container, Title } from '~/styles/global/general';

import Input from '~/components/Input/Input';
import Box from '~/components/Box';
import Spacer from '~/components/Spacer';

import FeedingImage from '~/assets/images/feeding.png';
import HousingImage from '~/assets/images/housing.png';
import HealthCareImage from '~/assets/images/health-care.png';
import LeisureImage from '~/assets/images/leisure.png';
import ClothesImage from '~/assets/images/clothes.png';
import { colors } from '~/styles/global';

function Search({ navigation }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container backgroundColor={colors.gray}>
      <Content showsVerticalScrollIndicator={false}>
        <SearchTitle>
          O que você está procurando, <Title color={colors.red}>Márcia?</Title>
        </SearchTitle>

        <Input
          style={{ backgroundColor: colors.white }}
          placeholder='Produtos, Lojas e etc…'
          returnKeyType='send'
          value={inputValue}
          onChangeText={(e) => setInputValue(e)}
          onSubmitEditing={() =>
            navigation.navigate('list-search', { search: inputValue })
          }
        />

        <BoxContainer marginTop={40}>
          <Box
            onPress={() => navigation.navigate('quickly-search')}
            marginTitleTop={10}
            image={
              <Image
                source={FeedingImage}
                resizeMode='cover'
                style={{
                  height: 58,
                  width: 63,
                }}
              />
            }
            title='Alimentação'
            colorTitle={colors.black}
          />

          <Box
            marginTitleTop={10}
            image={
              <Image
                source={HousingImage}
                resizeMode='cover'
                style={{
                  height: 60,
                  width: 69,
                }}
              />
            }
            title='Habitação'
            colorTitle={colors.black}
          />
        </BoxContainer>

        <BoxContainer>
          <Box
            marginTitleTop={10}
            image={
              <Image
                source={HealthCareImage}
                resizeMode='cover'
                style={{
                  height: 61,
                  width: 47,
                }}
              />
            }
            title='Higiene & Saúde'
            colorTitle={colors.black}
          />

          <Box
            marginTitleTop={10}
            image={
              <Image
                source={LeisureImage}
                resizeMode='cover'
                style={{
                  height: 50,
                  width: 50,
                }}
              />
            }
            title='Lazer'
            colorTitle={colors.black}
          />
        </BoxContainer>

        <BoxContainer>
          <Box
            marginTitleTop={10}
            image={
              <Image
                source={ClothesImage}
                resizeMode='cover'
                style={{
                  height: 55,
                  width: 73,
                }}
              />
            }
            title='Vestuário'
            colorTitle={colors.black}
          />
        </BoxContainer>

        <Spacer />
      </Content>
    </Container>
  );
}

export default Search;
