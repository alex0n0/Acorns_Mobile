import 'react-native-gesture-handler';
import React from 'react';
import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// internal
import Home_BottomTabsNavigation from './src/navigation/Home_BottomTabsNavigation';
import { globalColors } from './src/styles/GlobalStyles';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: globalColors.primary,
    background: globalColors.background,
    text: globalColors.text
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Home_BottomTabsNavigation></Home_BottomTabsNavigation>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
