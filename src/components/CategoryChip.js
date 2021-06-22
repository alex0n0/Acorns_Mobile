import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Badge} from 'react-native-elements';
// internal
import {globalColors, globalStyles} from '../styles/GlobalStyles';

function CategoryChip({
  category,
  activeCategoryId,
  handleSetActiveCategoryId,
  handleDeleteCategory,
}) {
  return (
    <TouchableOpacity
      onPress={() => handleSetActiveCategoryId(category.Id)}
      onLongPress={() => handleDeleteCategory(category.Id, category.Name)}
      activeOpacity={0.8}
      style={[
        globalStyles.flexRow,
        globalStyles.centeredContent,
        globalStyles.ml5,
        globalStyles.mr10,
        globalStyles.pl15,
        globalStyles.pr10,
        globalStyles.pt10,
        globalStyles.pb10,
        {
          borderWidth: 1,
          borderColor:
            category.Id == activeCategoryId ? globalColors.primaryL : 'white',
          borderRadius: 999999,
        },
      ]}>
      <Text
        style={[
          globalStyles.mr10,
          {
            color:
              category.Id == activeCategoryId ? globalColors.primaryL : 'white',
          },
          globalStyles.textTitleCase,
        ]}>
        {category.Name}
      </Text>
      <Badge
        value={category.count}
        badgeStyle={{
          backgroundColor:
            category.Id == activeCategoryId ? globalColors.primaryL : 'white',
        }}
        textStyle={{color: globalColors.text}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  _: {},
});

export default CategoryChip;
