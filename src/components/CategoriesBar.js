import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
// internal
import CategoryChip from './CategoryChip';
import {globalColors, globalStyles} from '../styles/GlobalStyles';

function CategoriesBar({
  categories,
  activeCategoryId,
  handleSetActiveCategoryId,
  handleToggleAddCategoryOverlay,
  handleDeleteCategory
}) {
  return (
    <View style={[globalStyles.flexRow, globalStyles.flex00, styles.categoryChipBar]}>
      <ScrollView
        contentInset={{
          top: 10,
          left: 5,
          bottom: 10,
          right: 5,
        }}
        contentContainerStyle={{
          paddingVertical: 10,
          paddingHorizontal: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {categories.map(category => (
          <CategoryChip
            key={category.Id}
            category={category}
            activeCategoryId={activeCategoryId}
            handleSetActiveCategoryId={handleSetActiveCategoryId}
            handleDeleteCategory={handleDeleteCategory}></CategoryChip>
        ))}
        <TouchableOpacity
          onPress={() => handleToggleAddCategoryOverlay(true)}
          activeOpacity={0.8}
          style={[
            globalStyles.flexRow,
            globalStyles.centeredContent,
            globalStyles.ml5,
            globalStyles.mr5,
            globalStyles.pl10,
            globalStyles.pr10,
            globalStyles.pt10,
            globalStyles.pb10,
          ]}>
          <Text style={[globalStyles.textWhite]}>Add</Text>
          <Icon name="add" type="material" color="white" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryChipBar: {
    height: 66,
    backgroundColor: globalColors.backgroundD,
  },
});

export default CategoriesBar;
