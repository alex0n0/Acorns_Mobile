import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// internal
import {globalStyles} from '../styles/GlobalStyles';
import logo from '../assets/images/Acorns.png';

const windowWidth = Dimensions.get('window').width;

function Header() {
  return (
    <View
      style={[
        globalStyles.centeredContent,
        globalStyles.flexRow,
        globalStyles.positionRelative,
        styles.header,
      ]}>
      <TouchableOpacity
        onPress={() => { console.log('back');}}
        style={[
          globalStyles.positionAbsolute,
          globalStyles.centeredContent,
          styles.backButton,
        ]}>
        <MaterialIcons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Image
        style={[styles.logo]}
        source={logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {height: 56, backgroundColor: 'white'},
  backButton: {left: 0, height: 56, width: 56},
  logo: {height: 40, width: 40},
});

export default Header;
