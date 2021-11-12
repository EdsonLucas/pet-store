import React from 'react';
import { Image } from 'react-native';
import {
  Content,
  FilterItems,
  FilterButton,
  BoxContainer,
  BoxItem,
  BackgroudImage,
  TextContainer,
  RowTextContainer,
} from '~/styles/dashboard/product/pagestore';
import { Container, Title, Text, Subtitle } from '~/styles/global/general';

import GoldenFood from '~/assets/images/golden.png';

import { colors } from '~/styles/global';

import BackButton from '~/components/Button/BackButton';
import Spacer from '~/components/Spacer';

function PageStore({ navigation }) {
  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} />

      <BoxContainer showsVerticalScrollIndicator={false}>
        <BackgroudImage color={colors.yellow}>
          <Image
            source={GoldenFood}
            resizeMode='cover'
            style={{
              alignSelf: 'center',
              width: 60,
              height: 100,
            }}
          />
        </BackgroudImage>

        <Content>
          <BoxItem>
            <TextContainer>
              <Subtitle color={colors.black} marginTop={16}>
                Ração Golden para Gatos adultos - Sabo…
              </Subtitle>

              <RowTextContainer>
                <Text>Cat World • 5km</Text>
                <Text color={colors.green}>Entrega Grátis</Text>
              </RowTextContainer>

              <Subtitle
                alignSelf='flex-end'
                color={colors.black}
                marginTop={25}
              >
                R$ 49,59
              </Subtitle>
            </TextContainer>
          </BoxItem>

          <Spacer height={20} />
        </Content>
      </BoxContainer>
    </Container>
  );
}

export default PageStore;
