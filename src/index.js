import 'react-native-reanimated';
import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { colors } from './styles/global';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle='dark-content' backgroundColor={colors.whiteLight} />
    <Routes />
  </NavigationContainer>
);

export default App;
