import {legacy_createStore as createStore} from 'redux';

const instiolState = {
  product: [
    {
      id: 1,
      img: require('../assets/images/product.webp'),
      name: 'Nike Blazer Premium',
      price: 150,
      like: false,
    },
    {
      id: 2,
      img: require('../assets/images/product.webp'),
      name: 'Nike Zoom fly 5',
      price: 180,
      like: false,
    },
    {
      id: 3,
      img: require('../assets/images/product.webp'),
      name: 'Nike Blazer',
      price: 100,
      like: false,
    },
    {
      id: 4,
      img: require('../assets/images/product.webp'),
      name: 'Nike Zoom fly 5 Premium',
      price: 200,
      like: false,
    },
  ],
  value: '',
  image: '',
};

function appReducer(prevState = instiolState, action) {
  if (action.type == 'data') {
    return {...prevState, value: action.payload};
  } else if (action.type == 'image') {
    return {...prevState, image: action.payload};
  } else if (action.type == 'like') {
    const updatedProducts = prevState.product.map(item => {
      if (action.payload.id === item.id) {
        return {...item, like: true}; // Toggle the 'like' property
      } else {
        return item;
      }
    });

    return {...prevState, product: updatedProducts};
  } else if (action.type == 'dislike') {
    const updatedProducts = prevState.product.map(item => {
      if (action.payload.id === item.id) {
        return {...item, like: false}; // Toggle the 'like' property
      } else {
        return item;
      }
    });

    return {...prevState, product: updatedProducts};
  } else if (action.type == 'items') {
    return {...prevState, product: action.payload};
  } else {
    return {...prevState};
  }
}
const store = createStore(appReducer);
export default store;
