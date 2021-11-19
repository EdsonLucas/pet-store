import React from 'react';
import { Content } from '~/styles/dashboard/profile/about';
import { colors } from '~/styles/global';
import { Container, Subtitle } from '~/styles/global/general';

import BackButton from '~/components/Button/BackButton';
import Logo from '~/components/Logo';

const About = ({ navigation }) => (
  <Container backgroundColor={colors.yellow}>
    <BackButton onPress={() => navigation.goBack()} />

    <Content>
      <Logo width={50} height={20} fontSize={20} marginTitleTop={-15} />

      <Subtitle marginTop={25} color={colors.brown}>
        Versão 1.0.0
      </Subtitle>
    </Content>
  </Container>
);

export default About;
