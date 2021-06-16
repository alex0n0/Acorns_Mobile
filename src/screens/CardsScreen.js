import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
function CardsScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor: 'green'}}>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View style={{height: 300}}>
            <Text>asdf</Text>
            <Svg height="50%" width="50%" viewBox="0 0 100 100">
              <Circle
                cx="50"
                cy="50"
                r="45"
                stroke="blue"
                strokeWidth="2.5"
                fill="green"
              />
            </Svg>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({});
export default CardsScreen;
