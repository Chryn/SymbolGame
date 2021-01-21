import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import i18n from './src/services/i18n';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initI18n = i18n;

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" hidden />
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
