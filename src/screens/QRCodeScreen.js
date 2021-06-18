import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet, View, Text, Dimensions} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
// internal
import {globalColors, globalStyles} from '../styles/GlobalStyles';

const windowWidth = Dimensions.get('window').width;

function QRCodeScreen() {
  return (
    <SafeAreaView style={[globalStyles.flex1]}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={[globalStyles.flex1, globalStyles.centeredContent]}>
        <QRCode
          value="http://awesome.link.qr"
          size={Math.round(windowWidth) - 200}
          backgroundColor={globalColors.background}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
export default QRCodeScreen;
