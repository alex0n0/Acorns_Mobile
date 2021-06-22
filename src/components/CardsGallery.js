import React from 'react';
import {
  FlatList,
  ScrollView,
  View,
  Text,
  RefreshControl,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import moment from 'moment';
// internal
import Card from '../components/Card';
import {globalColors, globalStyles} from '../styles/GlobalStyles';

const windowWidth = Dimensions.get('window').width;

function CardsGallery({
  cards,
  handleReload,
  isLoading,
  handleToggleFavouriteCard,
  handleNavigateToBarcode,
}) {
  return (
    <FlatList
      pagingEnabled={true}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={cards}
      keyExtractor={item => item.Id}
      renderItem={({item}) => (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={handleReload} />
          }
          contentInsetAdjustmentBehavior="automatic"
          style={{width: windowWidth}}>
          <View
            style={[
              globalStyles.mt20,
              globalStyles.pl10,
              globalStyles.pr20,
              globalStyles.flexRow,
            ]}>
            <TouchableWithoutFeedback
              onPress={() => {
                handleToggleFavouriteCard(item.Id, !item.IsFavourite);
              }}>
              <View
                style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
                <Icon
                  name="star"
                  type="material"
                  size={20}
                  color={
                    item.IsFavourite ? globalColors.primary : globalColors.muted
                  }
                />
                <Text
                  style={[
                    {
                      color: item.IsFavourite
                        ? globalColors.primary
                        : globalColors.muted,
                    },
                    globalStyles.b7,
                    globalStyles.ml5,
                  ]}>
                  {item.IsFavourite ? 'Favourite' : 'Add to favourite'}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <Text
            style={[
              globalStyles.textCenter,
              globalStyles.h1,
              globalStyles.mt10,
              globalStyles.textUppercase,
              globalStyles.b7,
            ]}>
            {item.Company ? item.Company : item.Name}
          </Text>
          <Card
            card={item}
            windowWidth={windowWidth}
            styles={[globalStyles.mt10]}
            handleNavigateToBarcode={handleNavigateToBarcode}></Card>
          <View
            style={[globalStyles.mt20, globalStyles.pl20, globalStyles.pr20]}>
            <View
              style={[
                globalStyles.flexRow,
                globalStyles.justifyContentBetween,
                globalStyles.alignItemsEnd,
                globalStyles.mb10,
              ]}>
              <Text>Points</Text>
              <Text
                style={[
                  globalStyles.h2,
                  globalStyles.b7,
                  globalStyles.textPrimaryD,
                ]}>
                {item.Points}
              </Text>
            </View>
            <View
              style={[
                globalStyles.flexRow,
                globalStyles.justifyContentBetween,
                globalStyles.alignItemsCenter,
                globalStyles.mb10,
              ]}>
              <Text>Rewards available</Text>
              <Button
                title="DETAILS"
                buttonStyle={{
                  backgroundColor: globalColors.backgroundD,
                }}
                titleStyle={{color: globalColors.primaryL}}
              />
            </View>
            <View
              style={[
                globalStyles.flexRow,
                globalStyles.justifyContentBetween,
              ]}>
              <Text>Joined</Text>
              <Text>{moment(item.createdDate).format('DD MMM YYYY')}</Text>
            </View>
          </View>
        </ScrollView>
      )}
    />
  );
}

export default CardsGallery;
