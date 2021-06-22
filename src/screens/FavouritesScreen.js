import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  RefreshControl,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
// internal
import Card from '../components/Card';
import * as http from '../api/httpService';
import {globalColors, globalStyles} from '../styles/GlobalStyles';

const windowWidth = Dimensions.get('window').width;

function FavouritesScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false);

  const [favouriteCards, setFavouriteCards] = useState([]);

  useEffect(() => {
    http
      .getCards()
      .then(res => {
        setFavouriteCards(res.filter(card => card.IsFavourite));
      })
      .catch(err => {
        // console.log(err);
      });
  }, []);

  useEffect(() => {
    if (isLoading) {
      http
        .getCards()
        .then(res => {
          setFavouriteCards(res.filter(card => card.IsFavourite));
          setIsLoading(false);
        })
        .catch(err => {
          // console.log(err);
        });
    }
  }, [isLoading]);

  const handleReload = () => {
    setIsLoading(true);
  };

  const handleNavigateToBarcode = card => {
    console.log(card);
    navigation.navigate('FavouritesStackBarcodeTopTabs', {
      screen: 'BarcodeTopTabsBarcodeScreen',
      params: {
        card: {
          cardId: card.Id,
        },
      },
    });
  };

  const handleToggleFavouriteCard = (id, name) => {
    Alert.alert(
      'Remove card',
      'Do you want to remove "' + name + '" from your favourites list?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            http
              .toggleFavouriteCard(id, false)
              .then(res => {
                http
                  .getCards()
                  .then(res => {
                    setFavouriteCards(res.filter(card => card.IsFavourite));
                  })
                  .catch(err => {
                    // console.log(err);
                  });
              })
              .catch(err => {
                console.log(err);
              });
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={[globalStyles.flex1]}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleReload} />
        }
        contentInsetAdjustmentBehavior="automatic">
        <View
          style={[
            globalStyles.mt50,
            globalStyles.mb50,
            globalStyles.pl10,
            globalStyles.pr10,
          ]}>
          <Text
            style={[
              globalStyles.h1,
              globalStyles.b7,
              globalStyles.textUppercase,
            ]}>
            Favourites
          </Text>
          <Text style={[globalStyles.textMuted]}>
            Easy access for your most used cards
          </Text>
        </View>

        {favouriteCards.map((card, i) => (
          <View key={card.Id} style={[globalStyles.mb80]}>
            <Text
              style={[
                globalStyles.mb10,
                globalStyles.textCenter,
                globalStyles.b7,
                globalStyles.textTitleCase,
              ]}>
              {card.Company ? card.Company : card.Name}
            </Text>
            <Card
              card={card}
              windowWidth={windowWidth}
              handleNavigateToBarcode={handleNavigateToBarcode}></Card>
            <View
              style={[
                globalStyles.mt10,
                globalStyles.pl20,
                globalStyles.pr20,
                globalStyles.flexRow,
                globalStyles.justifyContentBetween,
                globalStyles.alignItemsCenter,
              ]}>
              <TouchableWithoutFeedback
                onPress={() => {
                  handleToggleFavouriteCard(
                    card.Id,
                    card.Company ? card.Company : card.Name,
                  );
                }}>
                <View
                  style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
                  <Icon
                    name="star"
                    type="material"
                    size={20}
                    color={globalColors.primary}
                  />
                  <Text
                    style={[
                      globalStyles.textPrimary,
                      globalStyles.b7,
                      globalStyles.ml5,
                    ]}>
                    Favourite
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <Text style={[globalStyles.alignItemsBaseline]}>
                <Text
                  style={[
                    globalStyles.h2,
                    globalStyles.b7,
                    globalStyles.textPrimaryD,
                  ]}>
                  {card.Points}
                </Text>
                <Text style={[globalStyles.textMuted]}>{' '}Points</Text>
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
export default FavouritesScreen;
