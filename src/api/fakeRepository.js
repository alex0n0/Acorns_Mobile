import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

let userDetails = {
  FirstName: 'john',
  LastName: 'Citizen',
  Email: 'john@gmail.com',
  DateJoined: new Date('2020-09-11T11:20:05'),
};

let userCategories = [
  {
    Id: uuid(),
    Name: 'Gym',
  },
  {
    Id: uuid(),
    Name: 'Food',
  },
  {
    Id: uuid(),
    Name: 'Entertainment',
  },
  {
    Id: uuid(),
    Name: 'shopping',
  },
  {
    Id: uuid(),
    Name: 'bar',
  },
  {
    Id: uuid(),
    Name: 'travel',
  },
];

let userCards = [
  {
    Id: uuid(),
    Name: 'starbucks card',
    Barcode: uuid(),
    QRCode: uuid(),
    Company: 'starbucks',
    Points: 3,
    CardImage: 'https://i.colnect.net/f/3379/433/Hoyts-Rewards-Black.jpg',
    CreatedDate: new Date(),
    CategoryId: userCategories[1].Id,
    IsFavourite: true,
  },
  {
    Id: uuid(),
    Name: 'jbhifi card',
    Barcode: uuid(),
    QRCode: uuid(),
    Company: 'jbhifi',
    Points: 12,
    CardImage: 'https://i.pinimg.com/originals/29/09/a4/2909a4d068ad514ad5be167495594eae.png',
    CreatedDate: new Date(),
    CategoryId: userCategories[3].Id,
    IsFavourite: false,
  },
  {
    Id: uuid(),
    Name: 'event',
    Barcode: uuid(),
    QRCode: uuid(),
    Company: 'event cinemas',
    Points: 5,
    CardImage: null,
    CreatedDate: new Date(),
    CategoryId: userCategories[2].Id,
    IsFavourite: false,
  },
  {
    Id: uuid(),
    Name: 'local cafe',
    Barcode: uuid(),
    QRCode: uuid(),
    Company: null,
    Points: 8,
    CardImage: null,
    CreatedDate: new Date(),
    CategoryId: userCategories[1].Id,
    IsFavourite: false
  },
  {
    Id: uuid(),
    Name: 'asdf',
    Barcode: uuid(),
    QRCode: uuid(),
    Company: '24 hour fitness',
    Points: 15,
    CardImage: 'https://marketingcdn.giftcardgranny.com/merchant-images/lg/24-hour-fitness-gift-card.png',
    CreatedDate: new Date(),
    CategoryId: userCategories[0].Id,
    IsFavourite: false
  },
  {
    Id: uuid(),
    CardImage: 'https://static.wikia.nocookie.net/logopedia/images/8/83/Logol.jpg/revision/latest?cb=20110827233437',
    CategoryId: userCategories[0].Id,
    CreatedDate: new Date(),
    Name: 'asdf',
    Company: 'Crunch fitness',
    Barcode: uuid(),
    QRCode: uuid(),
    Points: 15,
    IsFavourite: true,
  },
  {
    Id: uuid(),
    Name: 'event',
    Barcode: uuid(),
    QRCode: uuid(),
    Company: 'nandos',
    Points: 11,
    CardImage: null,
    CreatedDate: new Date(),
    CategoryId: userCategories[1].Id,
    IsFavourite: false
  },
  {
    Id: uuid(),
    Name: 'event',
    Barcode: uuid(),
    QRCode: uuid(),
    Company: 'krispy kreme',
    Points: 7,
    CardImage: 'https://www.paypalobjects.com/digitalassets/c/gifts/media/catalog/product/k/r/krispy_kreme.png',
    CreatedDate: new Date(),
    CategoryId: userCategories[1].Id,
    IsFavourite: true,
  },
];

// user details
export const getUserDetails = () => {
  return {...userDetails};
};

// user categories
export const createUserCategory = name => {
  userCategories.push({
    Id: uuid(),
    Name: name,
  });
  return true;
};
export const getUserCategories = () => {
  return [...userCategories];
};
export const getUserCategory = id => {
  return [...userCategories].find(category => category.Id == id);
};
export const updateUserCategory = ({categoryName}) => {
  return [...userCategories].map(category => {
    if (category.Id == id) {
      category.Name = categoryName;
    }
  });
};
export const deleteUserCategory = id => {
  const newCategories = [...userCategories].filter(category => category.Id != id);
  userCategories = newCategories;
  return true;
};

// user cards
export const createUserCard = name => {
  userCards.push({
    Id: uuid(),
    Name: name,
  });
  return true;
};
export const getUserCards = () => {
  return [...userCards];
};
export const getUserCard = id => {
  return [...userCards].find(card => card.Id == id);
};
export const updateUserCard = ({cardId, cardName}) => {
  [...userCards].map(card => {
    if (card.Id == cardId) {
      card.Name = cardName;
    }
  });
  return true;
};
export const deleteUserCard = id => {
  userCards = [...userCards].filter(card => card.Id == id);
  return true;
};
export const toggleFavouriteCard = (cardId, isFavourite) => {
  [...userCards].map(card => {
    if (card.Id == cardId) {
      card.IsFavourite = isFavourite;
    }
  });
  return true;
};
export const changeCardCategory = (cardId, toCategoryId) => {
  [...userCards].map(card => {
    if (card.Id == cardId) {
      card.CategoryId = toCategoryId;
    }
  });
  return true;
};
export const changeCardCategoryMultiple = (fromCategoryId, toCategoryId) => {
  [...userCards].map(card => {
    if (card.CategoryId == fromCategoryId) {
      card.CategoryId = toCategoryId;
    }
  });
  return true;
};
