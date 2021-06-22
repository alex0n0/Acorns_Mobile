import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {Button, Overlay, Input} from 'react-native-elements';
// internal
import {globalColors, globalStyles} from '../styles/GlobalStyles';

const windowWidth = Dimensions.get('window').width;

function AddCategoryOverlay({
  isAddCategoryOverlayVisible,
  handleToggleAddCategoryOverlay,
  handleAddCategory,
}) {
  const [categoryName, setCategoryName] = useState('');

  const handleAddCategoryPress = () => {
    handleAddCategory(categoryName.trim());
    setCategoryName('');
    handleToggleAddCategoryOverlay(false);
  };
  
  return (
    <Overlay
      isVisible={isAddCategoryOverlayVisible}
      onBackdropPress={() => handleToggleAddCategoryOverlay(false)}>
      <View style={[styles.addCategoryOverlay]}>
        <Text
          style={[
            globalStyles.mb20,
            globalStyles.textCenter,
            globalStyles.f20,
            globalStyles.b7,
          ]}>
          Add a new category
        </Text>
        <Input
          style={[globalStyles.fDefault]}
          placeholder="Category name"
          value={categoryName}
          onChangeText={value => setCategoryName(value)}
        />
        <View style={[globalStyles.pb10, globalStyles.pl10, globalStyles.pr10]}>
          <Button
            title="CREATE"
            style={[globalStyles.w100]}
            buttonStyle={{
              backgroundColor: globalColors.backgroundD,
            }}
            titleStyle={{color: globalColors.primaryL}}
            onPress={() => handleAddCategoryPress()}
          />
        </View>
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  addCategoryOverlay: {
    width: windowWidth - 60,
  },
});

export default AddCategoryOverlay;
