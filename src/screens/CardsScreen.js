import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FAB} from 'react-native-elements';

// internal
import CategoriesBar from '../components/CategoriesBar';
import Card from '../components/Card';
import {globalColors, globalStyles} from '../styles/GlobalStyles';
import {getCards, getCategories} from '../api/httpService';

const windowWidth = Dimensions.get('window').width;

function CardsScreen({navigation}) {
  const {colors} = useTheme();

  const [isLoading, setIsLoading] = useState(false);

  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => {
        // console.log(err);
      });
    getCategories()
      .then(res => {
        setCategories(res);
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

      <CategoriesBar categories={categories}></CategoriesBar>

      <FlatList
        refreshing={isLoading}
        onRefresh={handleReload}
        pagingEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cards}
        keyExtractor={item => item.Id}
        renderItem={({item}) => (
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{width: windowWidth}}>
            <Card
              card={item}
              windowWidth={windowWidth}
              styles={[globalStyles.mt10]}
              onPressNavigation={() => {
                navigation.navigate('CardsStackBarcodeTopTabs');
              }}></Card>
            <View
              style={[globalStyles.mt20, globalStyles.pl20, globalStyles.pr20]}>
              <Text>{item.Id}</Text>
              <Text>{item.Nickname}</Text>
              <Text>{item.Points}</Text>
              <Text>asdfasdf</Text>
              <Text>end</Text>
            </View>
          </ScrollView>
        )}
      />

      <FAB
        onPress={() => {
          navigation.navigate('CardsStackAddCardScreen');
        }}
        title="Add card"
        placement="right"
        color={globalColors.primaryL}
        titleStyle={{color: globalColors.primaryD}}
        icon={
          <MaterialIcons name="add" size={15} color={globalColors.primaryD} />
        }
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
export default CardsScreen;
