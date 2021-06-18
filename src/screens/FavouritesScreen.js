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

  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => {
        // console.log(err);
      });
  }, []);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  const handleReload = () => {
    setIsLoading(true);
  };

  return (
    <SafeAreaView style={[globalStyles.flex1]}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleReload} />
        }
        contentInsetAdjustmentBehavior="automatic">
        <Text style={[globalStyles.textCenter, globalStyles.mb50]}>
          Favourites
        </Text>
        {cards.map((card, i) => (
          <Card
            key={card.Id}
            card={card}
            windowWidth={windowWidth}
            styles={[globalStyles.mb50]}
            onPressNavigation={() => {
              navigation.navigate('FavouritesStackBarcodeTopTabs');
            }}></Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
export default FavouritesScreen;
