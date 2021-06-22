import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet, View, Text, Dimensions} from 'react-native';
import Barcode from 'react-native-barcode-builder';
// internal
import {globalColors, globalStyles} from '../styles/GlobalStyles';

const windowWidth = Dimensions.get('window').width;

function BarcodeScreen({route, navigation}) {
  const { card } = route.params;
  console.log(card);

  return (
    <SafeAreaView style={[globalStyles.flex1]}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={[globalStyles.flex1, globalStyles.centeredContent]}>
        <Text>
          <Barcode value="Hello World" format="CODE128" background={globalColors.background}/>;
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
export default BarcodeScreen;
