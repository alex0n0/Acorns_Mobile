import axios from 'axios';
import * as repo from './fakeRepository';

export const createCategory = (name) => {
  console.log('createCategory');
  return new Promise((resolve, reject) => {
    resolve(repo.createUserCategory(name));
  });
}

export const getCategories = () => {
  console.log('getCategories');
  return new Promise((resolve, reject) => {
    resolve(repo.getUserCategories());
  });
};

export const deleteCategory = (id) => {
  console.log('deleteCategory');
  return new Promise((resolve, reject) => {
    resolve(repo.deleteUserCategory(id));
  });
};


export const getCards = () => {
  // return axios.get();
  console.log('getCards');
  return new Promise((resolve, reject) => {
    resolve(repo.getUserCards());
  });
};

export const toggleFavouriteCard = (id) => {
  console.log('toggleFavouriteCard');
  return new Promise((resolve, reject) => {
    resolve(repo.toggleFavouriteCard(id));
  }); 
}
