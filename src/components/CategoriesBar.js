import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Badge} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// internal
import {globalColors, globalStyles} from '../styles/GlobalStyles';

function CategoriesBar({categories}) {
  const chipPress = chipname => {
    console.log(chipname);
  };

  return (
    <View style={[globalStyles.flexRow, styles.categoryChipBar]}>
      <FlatList
        contentInset={{
          top: 10,
          left: 5,
          bottom: 10,
          right: 5,
        }}
        contentContainerStyle={{
          paddingVertical: Platform.OS === 'android' ? 10 : 0,
          paddingHorizontal: Platform.OS === 'android' ? 5 : 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={item => item.Id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => chipPress(item.Name)}
            activeOpacity={0.8}
            style={[
              globalStyles.flexRow,
              globalStyles.centeredContent,
              {
                marginLeft: 5,
                marginRight: 5,
                borderWidth: 1,
                borderColor: item.active ? globalColors.primaryL : 'white',
                borderRadius: 999999,
                paddingLeft: 14,
                paddingRight: 10,
                paddingVertical: 10,
              },
            ]}>
            <Text
              style={{
                color: item.active ? globalColors.primaryL : 'white',
                marginRight: 10,
              }}>
              {item.Name}
            </Text>
            <Badge
              value="99+"
              badgeStyle={{
                backgroundColor: item.active ? globalColors.primaryL : 'white',
              }}
              textStyle={{color: globalColors.text}}
            />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={[styles.categoryConfigButton, globalStyles.centeredContent]}
        activeOpacity={0.8}>
        <MaterialIcons name="settings" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryChipBar: {
    height: 66,
    flexGrow: 0,
    flexShrink: 1,
    backgroundColor: globalColors.backgroundD,
  },
  categoryConfigButton: {
    height: '100%',
    width: 66,
    flexGrow: 0,
    flexShrink: 0,
  },
});

export default CategoriesBar;
