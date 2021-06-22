import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  RefreshControl,
} from 'react-native';
// internal
import Card from '../components/Card';
import {globalColors, globalStyles} from '../styles/GlobalStyles';
import {getCards} from '../api/httpService';

const windowWidth = Dimensions.get('window').width;

function FavouritesScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false);

  const [favouriteCards, setFavouriteCards] = useState([]);

  useEffect(() => {
    getCards()
      .then(res => {
        setFavouriteCards(res.filter(card => card.IsFavourite));
      })
      .catch(err => {
        // console.log(err);
      });
  }, []);

  useEffect(() => {
    if (isLoading) {
      getCards()
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

  const handleNavigateToBarcode = (card) => {
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

  return (
    <SafeAreaView style={[globalStyles.flex1]}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleReload} />
        }
        contentInsetAdjustmentBehavior="automatic">
        <Text
          style={[
            globalStyles.mt10,
            globalStyles.mb10,
            globalStyles.textCenter,
            globalStyles.h1,
            globalStyles.b7,
            globalStyles.textUppercase,
          ]}>
          Favourites
        </Text>
        {favouriteCards.map((card, i) => (
          <View key={card.Id}>
            <Card
              card={card}
              windowWidth={windowWidth}
              handleNavigateToBarcode={handleNavigateToBarcode}></Card>
            <View style={[globalStyles.mb50, globalStyles.pl20, globalStyles.pr20, globalStyles.flexRow]}>
              <Text
                style={[
                  globalStyles.mt10,
                  globalStyles.b7,
                  globalStyles.textUppercase,
                ]}>
                {card.Company ? card.Company : card.Name}
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
