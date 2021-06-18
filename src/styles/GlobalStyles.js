import {StyleSheet} from 'react-native';

export const globalColors = {
  primaryL: '#B2DE98',
  primary: '#5DB12B',
  primaryD: '#276800',
  text: '#323232',
  background: '#f2f2f2',
  backgroundD: '#323232',
};

export const globalStyles = StyleSheet.create({
  border: {borderWidth: 1, borderColor: 'brown'},
  flexRow: {flexDirection: 'row'},
  flex1: {flex: 1},
  flex00: {flexGrow: 0, flexShrink: 0},
  flex11: {flexGrow: 1, flexShrink: 1},
  positionRelative: {position: 'relative'},
  positionAbsolute: {position: 'absolute'},
  centeredContent: {alignItems: 'center', justifyContent: 'center'},
  pl20: {paddingLeft: 20},
  pr20: {paddingRight: 20},
  pt20: {paddingTop: 20},
  pb20: {paddingBottom: 20},
  mt10: {marginTop: 10},
  mt20: {marginTop: 20},
  mb50: {marginBottom: 50},
  textCenter: {textAlign: 'center'},
  textBlack: {color: 'black'},
  bgWhite: {backgroundColor: 'white'}
});
