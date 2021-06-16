// dependencies
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// components
import CardsScreen from '../screens/CardsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {
  return (
    <Tab.Navigator initialRouteName="BottomTabsCardsScreen">
      <Tab.Screen
        name="BottomTabsFavouritesScreen"
        component={FavouritesScreen}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BottomTabsCardsScreen"
        component={CardsScreen}
        options={{
          tabBarLabel: 'Cards',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="credit-card" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BottomTabsProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabsNavigation;
