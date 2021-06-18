import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// internal
import Barcode_TopTabsNavigation from './Barcode_TopTabsNavigation';
import CardsScreen from '../screens/CardsScreen';
import RewardDetailsScreen from '../screens/RewardDetailsScreen';
import AddCardScreen from '../screens/AddCardScreen';
import ScannerScreen from '../screens/ScannerScreen';
import logo from '../assets/images/Acorns.png';

const Stack = createStackNavigator();

function Cards_StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="CardsStackCardsScreen" screenOptions={{headerTitleAlign: 'center', headerTitle: props => <Image source={logo} style={[styles.logo]}/>}}>
      <Stack.Screen
        name="CardsStackCardsScreen"
        component={CardsScreen}
      />
      <Stack.Screen
        name="CardsStackRewardDetailsScreen"
        component={RewardDetailsScreen}
      />
      <Stack.Screen
        name="CardsStackBarcodeTopTabs"
        component={Barcode_TopTabsNavigation}
      />
      <Stack.Screen
        name="CardsStackAddCardScreen"
        component={AddCardScreen}
      />
      <Stack.Screen
        name="CardsStackScannerScreen"
        component={ScannerScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {height: 40, width: 40},
});

export default Cards_StackNavigation;
