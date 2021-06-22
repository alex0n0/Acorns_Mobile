import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
// internal
import Header from '../components/Header';
import Card from '../components/Card';
import {globalColors, globalStyles} from '../styles/GlobalStyles';
import {getCards} from '../api/httpService';
function ProfileScreen() {
  return (
    <SafeAreaView style={[globalStyles.flex1]}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{borderWidth: 1, borderColor: 'blue'}}>
        <View>
          <Svg height="100" width="100" viewBox="0 0 100 100">
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="blue"
              strokeWidth="2.5"
              fill="green"
            />
          </Svg>
          <Text>Profile Screen</Text>
          <Text>asdf</Text>
          <Text>asdf</Text>
          <Text>asdf</Text>
          <Text>asdf</Text>
          <Text>asdf</Text>
          <Text>asdf</Text>
          <Text>asdf</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});

export default ProfileScreen;
