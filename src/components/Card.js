import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// internal
import {globalColors, globalStyles} from '../styles/GlobalStyles';
import defaultCard from '../assets/images/default-card.png';

const cardOffset = 10;

function Card({card, handleNavigateToBarcode, windowWidth, styles = []}) {
  return (
    <View
      style={[
        ...styles,
        {
          width: windowWidth - cardOffset * 2,
          left: cardOffset,
          height: (windowWidth - cardOffset * 2) * 0.63,
        },
        globalStyles.positionRelative,
        globalStyles.centeredContent,
      ]}>
      {card.CardImage ? (
        <Image
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: 5,
            },
          ]}
          source={{uri: card.CardImage}}
          resizeMode="cover"
        />
      ) : (
        <Image
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: 5,
            },
          ]}
          source={defaultCard}
          resizeMode="cover"
        />
      )}

      <TouchableOpacity
        style={[globalStyles.positionAbsolute, {bottom: 10, right: 10}]}
        onPress={() => handleNavigateToBarcode(card)}
        activeOpacity={1}>
        <View
          style={[
            globalStyles.centeredContent,
            globalStyles.bgBackgroundD,
            globalStyles.rounded,
            componentStyles.navigateToBarcodeButton,
          ]}>
          <MaterialIcons name="search" size={40} color={globalColors.primaryL} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const componentStyles = StyleSheet.create({
  navigateToBarcodeButton: {height: 60, width: 60},
  _: {},
});

export default Card;
