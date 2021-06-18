import axios from 'axios';
import {v4 as uuid} from 'uuid';

export const getCards = () => {
  // return axios.get();
  console.log('getCards');
  return new Promise((resolve, reject) => {
    resolve([
      {
        Id: 'a',
        Nickname: 'Test card',
        Points: 3,
        CardImage: null,
        CreatedDate: new Date(),
      },
      {
        Id: 'b',
        Nickname: 'Test card',
        Points: 3,
        CardImage: 'https://i.colnect.net/f/3379/433/Hoyts-Rewards-Black.jpg',
      },
      {
        Id: 'c',
        Nickname: 'Test card',
        Points: 3,
        CardImage: null,
      },
      {
        Id: 'd',
        Nickname: 'Test card',
        Points: 3,
        CardImage: 'https://i.colnect.net/f/3379/433/Hoyts-Rewards-Black.jpg',
      },
      {
        Id: 'e',
        Nickname: 'Test card',
        Points: 3,
        CardImage: 'https://i.colnect.net/f/3379/433/Hoyts-Rewards-Black.jpg',
      },
      {
        Id: 'f',
        Nickname: 'Test card',
        Points: 3,
        CardImage: 'https://i.colnect.net/f/3379/433/Hoyts-Rewards-Black.jpg',
      },
      {
        Id: 'g',
        Nickname: 'Test card',
        Points: 3,
        CardImage: 'https://i.colnect.net/f/3379/433/Hoyts-Rewards-Black.jpg',
      },
    ]);
  });
};

export const getCategories = () => {
  console.log('getCategories');
  return new Promise((resolve, reject) => {
    resolve([
      {
        Id: 'a',
        Name: 'gym',
      },
      {
        Id: 'b',
        Name: 'cafe',
        active: true
      },
      {
        Id: 'c',
        Name: 'awfe awefga weg ',
      },
      {
        Id: 'd',
        Name: 'awfe awefg awg aweg awef ',
      },
      {
        Id: 'e',
        Name: 'awfe aweg aweg waf awf ',
      },
      {
        Id: 'f',
        Name: 'awef awfe awg aweg waf w',
      },
      {
        Id: 'g',
        Name: 'asd asdga sdgadsg awf wa',
      },
      {
        Id: 'h',
        Name: 'asdf asdfaf asdf ',
      }
    ]);
  });
};
