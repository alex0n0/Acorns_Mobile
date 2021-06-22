import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {Button} from 'react-native-elements';
// internal
import Header from '../components/Header';
import {globalColors, globalStyles} from '../styles/GlobalStyles';
import {getCards} from '../api/httpService';

function ProfileScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false);

  const [cards, setCards] = useState([]);
  const [signedIn, setSignedIn] = useState(true);

  useEffect(() => {
    // getCards()
    //   .then(res => {
    //     setCards(res);
    //   })
    //   .catch(err => {
    //     // console.log(err);
    //   });
  }, []);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  const handleReload = () => {
    setIsLoading(true);
  };

  return (
    <SafeAreaView style={[globalStyles.flex1]}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Header></Header>
      {signedIn ? (
        <View style={[{flex: 1}]}>
          <View style={[globalStyles.flex11]}>
            <View
              style={[
                globalStyles.pt20,
                globalStyles.pb20,
                globalStyles.pl10,
                globalStyles.pr10,
              ]}>
              <Text>John Citizen</Text>
              <Text>john@gmail.com</Text>
              <Text>Joined 20 Mar 2021</Text>
            </View>
            <View
              style={[
                globalStyles.pt10,
                globalStyles.pb10,
                globalStyles.bgWhite,
              ]}>
              <TouchableHighlight
                activeOpacity={1}
                underlayColor="#eee"
                onPress={() => {}}>
                <View
                  style={[
                    globalStyles.pt20,
                    globalStyles.pb20,
                    globalStyles.pl10,
                    globalStyles.pr10,
                  ]}>
                  <Text>Change password</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View
            style={[
              globalStyles.flex00,
              globalStyles.pl10,
              globalStyles.pr10,
              globalStyles.pb10,
              globalStyles.pt50,
            ]}>
            <Button
              title="SIGN OUT"
              style={[globalStyles.w100]}
              buttonStyle={{
                backgroundColor: globalColors.backgroundD,
              }}
              titleStyle={{color: globalColors.primaryL}}
            />
          </View>
        </View>
      ) : (
        <View style={[globalStyles.flex1, globalStyles.centeredContent]}>
          <Text
            style={[
              globalStyles.mb10,
              globalStyles.textCenter,
              globalStyles.textMuted,
            ]}>
            You are not signed in
          </Text>
          <View
            style={[
              globalStyles.w100,
              globalStyles.flex00,
              globalStyles.pl10,
              globalStyles.pr10,
            ]}>
            <Button
              title="SIGN IN"
              style={[globalStyles.w100]}
              buttonStyle={{
                backgroundColor: globalColors.backgroundD,
              }}
              titleStyle={{color: globalColors.primaryL}}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
export default ProfileScreen;
