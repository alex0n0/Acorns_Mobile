import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import {
  FAB,
  Button,
  BottomSheet,
  Overlay,
  Icon,
  Input,
} from 'react-native-elements';
// internal
import CategoriesBar from '../components/CategoriesBar';
import CardsGallery from '../components/CardsGallery';
import {globalColors, globalStyles} from '../styles/GlobalStyles';
import * as http from '../api/httpService';
import AddCategoryOverlay from '../components/AddCategoryOverlay';

function CardsScreen({navigation}) {
  const {colors} = useTheme();

  const [isLoading, setIsLoading] = useState(false);

  const [categories, setCategories] = useState([]);
  const [categoriesBar, setCategoriesBar] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState('');
  const [cards, setCards] = useState([]);
  const [activeCategoryCards, setActiveCategoryCards] = useState([]);

  const [isAddCategoryOverlayVisible, setIsAddCategoryOverlayVisible] =
    useState(false);

  useEffect(() => {
    http
      .getCategories()
      .then(res => {
        setCategories(res.map(category => ({...category, count: 0})));
        if (res.length > 0) {
          setActiveCategoryId(res[0].Id);
        }
      })
      .catch(err => {
        // console.log(err);
      });
  }, []);

  useEffect(() => {
    http
      .getCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => {
        // console.log(err);
      });
  }, [categories]);

  useEffect(() => {
    setCategoriesBar(() => {
      return categories.map(category => {
        return {
          ...category,
          count: cards.filter(card => card.CategoryId == category.Id).length,
        };
      });
    });
  }, [categories, cards]);

  useEffect(() => {
    setActiveCategoryCards(
      cards.filter(card => card.CategoryId == activeCategoryId),
    );
  }, [cards, activeCategoryId]);

  useEffect(() => {
    if (isLoading) {
      http
        .getCategories()
        .then(res => {
          setCategories(res.map(category => ({...category, count: 0})));
        })
        .catch(err => {
          // console.log(err);
        });

      setIsLoading(false);
    }
  }, [isLoading]);

  const handleReload = () => {
    setIsLoading(true);
  };

  const handleSetActiveCategoryId = id => {
    setActiveCategoryId(id);
  };

  const handleDeleteCategory = (categoryId, categoryName) => {
    // console.log('handleDeleteCategory', categoryId);
    Alert.alert(
      'Delete Category',
      'Do you want to delete ' + categoryName + '?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            http
              .deleteCategory(categoryId)
              .then(res => {
                console.log('hello');
                http
                  .getCategories()
                  .then(res => {
                    console.log(res);
                    setCategories(
                      res.map(category => ({...category, count: 0})),
                    );
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

  const handleToggleAddCategoryOverlay = open => {
    setIsAddCategoryOverlayVisible(open);
  };

  const handleAddCategory = name => {
    console.log(name);
    http
      .createCategory(name)
      .then(res => {
        http
          .getCategories()
          .then(res => {
            setCategories(res.map(category => ({...category, count: 0})));
            http
              .getCards()
              .then(res => {
                setCards(res);
              })
              .catch(err => {
                // console.log(err);
              });
          })
          .catch(err => {
            // console.log(err);
          });
      })
      .catch(err => {
        // console.log(err);
      });
  };

  const handleToggleFavouriteCard = id => {
    http
      .toggleFavouriteCard(id)
      .then(res => {
        http
          .getCards()
          .then(res => {
            setCards(res);
          })
          .catch(err => {
            // console.log(err);
          });
      })
      .catch(err => {
        // console.log(err);
      });
  };

  const handleNavigateToBarcode = card => {
    console.log(card);
    navigation.navigate('CardsStackBarcodeTopTabs', {
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
      <CategoriesBar
        categories={categoriesBar}
        activeCategoryId={activeCategoryId}
        handleSetActiveCategoryId={handleSetActiveCategoryId}
        handleToggleAddCategoryOverlay={handleToggleAddCategoryOverlay}
        handleDeleteCategory={handleDeleteCategory}></CategoriesBar>
      {activeCategoryCards.length == 0 ? (
        <View style={[globalStyles.flex1, globalStyles.centeredContent]}>
          <Text>no cards</Text>
        </View>
      ) : null}
      {activeCategoryCards.length > 0 ? (
        <CardsGallery
          cards={activeCategoryCards}
          handleReload={handleReload}
          isLoading={isLoading}
          handleToggleFavouriteCard={handleToggleFavouriteCard}
          handleNavigateToBarcode={handleNavigateToBarcode}></CardsGallery>
      ) : null}
      <FAB
        onPress={() => {
          navigation.navigate('CardsStackAddCardScreen');
        }}
        title="Add card"
        placement="right"
        color={globalColors.primaryL}
        titleStyle={{color: globalColors.primaryD}}
        icon={
          <Icon
            name="add"
            type="material"
            size={15}
            color={globalColors.primaryD}
          />
        }
      />

      <AddCategoryOverlay
        isAddCategoryOverlayVisible={isAddCategoryOverlayVisible}
        handleToggleAddCategoryOverlay={handleToggleAddCategoryOverlay}
        handleAddCategory={handleAddCategory}></AddCategoryOverlay>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
export default CardsScreen;
