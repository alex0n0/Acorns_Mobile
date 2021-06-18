// dependencies
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// components
import Favourites_StackNavigation from './Favourites_StackNavigation';
import Cards_StackNavigation from './Cards_StackNavigation';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function Home_BottomTabsNavigation() {
  return (
    <Tab.Navigator initialRouteName="BottomTabsCardsStackNavigation">
      <Tab.Screen
        name="BottomTabsFavouritesStackNavigation"
        component={Favourites_StackNavigation}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BottomTabsCardsStackNavigation"
        component={Cards_StackNavigation}
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
export default Home_BottomTabsNavigation;
