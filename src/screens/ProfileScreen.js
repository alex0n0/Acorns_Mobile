import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  RefreshControl,
  Alert,
} from 'react-native';
import {Button} from 'react-native-elements';
// internal
import Header from '../components/Header';
import {globalColors, globalStyles} from '../styles/GlobalStyles';
import * as http from '../api/httpService';
import moment from 'moment';

function ProfileScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false);

  const [cards, setCards] = useState([]);
  const [signedIn, setSignedIn] = useState(true);
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    http
      .getUserDetails()
      .then(res => {
        setUserDetails(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (isLoading) {
      http
        .getUserDetails()
        .then(res => {
          setUserDetails(res);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [isLoading]);

  const handleReload = () => {
    setIsLoading(true);
  };

  const handleSignOut = () => {
    Alert.alert('Sign out', undefined, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          setUserDetails();
        },
      },
    ]);
  };
  const handleSignIn = () => {
    http
      .getUserDetails()
      .then(res => {
        setUserDetails(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={[globalStyles.flex1]}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Header></Header>
      {userDetails ? (
        <View style={[globalStyles.flex1]}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={handleReload} />
            }>
            <View
              style={[
                globalStyles.pt20,
                globalStyles.pb20,
                globalStyles.pl10,
                globalStyles.pr10,
              ]}>
              <Text style={[globalStyles.f20, globalStyles.textTitleCase]}>
                {userDetails.FirstName + ' ' + userDetails.LastName}
              </Text>
              <Text style={[globalStyles.mb10]}>{userDetails.Email}</Text>
              <Text style={[globalStyles.textMuted]}>
                Joined on {moment(userDetails.DateJoined).format('DD MMM YYYY')}
              </Text>
            </View>
            <View
              style={[
                globalStyles.mb10,
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
          </ScrollView>
          <View
            style={[
              globalStyles.pl10,
              globalStyles.pr10,
              globalStyles.pb20,
              globalStyles.pt10,
            ]}>
            <Button
              title="SIGN OUT"
              style={[globalStyles.w100]}
              buttonStyle={{
                backgroundColor: globalColors.backgroundD,
              }}
              titleStyle={{color: globalColors.primaryL}}
              onPress={() => handleSignOut()}
            />
          </View>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={[
            globalStyles.flex11,
            globalStyles.centeredContent,
          ]}>
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
              onPress={() => handleSignIn()}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
export default ProfileScreen;
