import { createStore, combineReducers } from 'redux';
// import {}
const rootReducer = combineReducers({
  cards: cardsReducer,
  categories: categoriesReducer
});

const store = createStore(rootReducer);
export default store;