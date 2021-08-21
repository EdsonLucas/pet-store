import 'react-native-reanimated';
import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './routes';
import { colors } from './styles/global';

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn); // it's good to explicitly catch and inspect any error

async function fetchFonts() {
  await Font.loadAsync({
    'HelveticaNowDisplay-Bold': require('~/assets/fonts/HelveticaNowDisplay-Bold.ttf'),
    'HelveticaNowDisplay-Medium': require('~/assets/fonts/HelveticaNowDisplay-Medium.ttf'),
    'Linotte-Bold': require('~/assets/fonts/Linotte-Bold.otf'),
  });
}

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
    fetchFonts();
  }, []);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.error(error)}
      />
    );
  }
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor={colors.whiteLight} />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
