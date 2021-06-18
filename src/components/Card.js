import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
// internal
import {globalStyles} from '../styles/GlobalStyles';
import defaultCard from '../assets/images/default-card.png';

const cardOffset = 10;

function Card({onPressNavigation, card, windowWidth, styles = []}) {
  return (
    <TouchableOpacity
      onPress={onPressNavigation}>
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

        <Text style={{textAlign: 'center'}}>this is the card</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardImage: {width: '100%', height: '50%'},
  _: {},
});

export default Card;
