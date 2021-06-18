// dependencies
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// components
import Barcode_TopTabsNavigation from './Barcode_TopTabsNavigation';
import FavouritesScreen from '../screens/FavouritesScreen';
import RewardDetailsScreen from '../screens/ProfileScreen';
import logo from '../assets/images/Acorns.png';

const Stack = createStackNavigator();

function Favourites_StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="FavouritesStackFavouritesScreen" screenOptions={{headerTitleAlign: 'center', headerTitle: props => <Image source={logo} style={[styles.logo]}/>}}>
      <Stack.Screen
        name="FavouritesStackFavouritesScreen"
        component={FavouritesScreen}
      />
      <Stack.Screen
        name="FavouritesStackBarcodeTopTabs"
        component={Barcode_TopTabsNavigation}
      />
      <Stack.Screen
        name="FavouritesStackRewardDetailsScreen"
        component={RewardDetailsScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {height: 40, width: 40},
});

export default Favourites_StackNavigation;
