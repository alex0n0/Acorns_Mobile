import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// internal
import BarcodeScreen from '../screens/BarcodeScreen';
import QRCodeScreen from '../screens/QRCodeScreen';

const TopTab = createMaterialTopTabNavigator();

function Barcode_TopTabsNavigation() {
  return (
    <TopTab.Navigator initialRouteName="BarcodeTopTabsBarcodeScreen">
      <TopTab.Screen
        name="BarcodeTopTabsBarcodeScreen"
        component={BarcodeScreen}
        options={{tabBarLabel: 'Barcode'}}
      />
      <TopTab.Screen
        name="BarcodeTopTabsQRCodeScreen"
        component={QRCodeScreen}
        options={{tabBarLabel: 'QR Code'}}
      />
    </TopTab.Navigator>
  );
}

export default Barcode_TopTabsNavigation;
