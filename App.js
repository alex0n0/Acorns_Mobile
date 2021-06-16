// dependencies
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// components
import BottomTabsNavigation from './src/navigation/BottomTabsNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigation></BottomTabsNavigation>
    </NavigationContainer>
  );
};

export default App;
