import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getCart = ({ cart }) => cart;
export const getRequest = ({ cart }) => cart.request;
export const getTotalPrice = ({ cart }) => cart.products.reduce((total, product) => product.price * product.amount + total, 0);
export const getTotalAmount = ({ cart }) => cart.products.reduce(( amount, product) => product.amount + amount, 0);

/* action name creator */
const reducerName = 'cart';
const createActionName = name =>  `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const CHANGE_AMOUNT = createActionName('CHANGE_AMOUNT');
const ADD_NOTES = createActionName('ADD_NOTES');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const SEND_ORDER = createActionName('SEND_ORDER');

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_CART = createActionName('LOAD_CART');
const SAVE_CART = createActionName('SAVE_CART');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_TO_CART });
export const changeAmount = payload => ({ payload, type: CHANGE_AMOUNT });
export const addNotes = payload => ({ payload, type: ADD_NOTES });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const sendOrder = payload => ({ payload, type: SEND_ORDER });

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const loadCart = payload => ({ payload, type: LOAD_CART });
export const saveCart = payload => ({ payload, type: SAVE_CART });

/* thunk creators */
export const saveCartRequest = data => {
  return () => {
    localStorage.setItem('cart', JSON.stringify(data));
  };
};

export const loadCartRequest = () => {
  return dispatch => {
    let getSavedCart;
    localStorage.getItem('cart') ?
      getSavedCart = JSON.parse(localStorage.getItem('cart')) : getSavedCart = [];
    console.log('cart', getSavedCart);

  };
};

// export const loadCartRequest = () => {
//   return () => {

//     const cart = {
//       products: [],
//       amount: 0,
//       total: 0,
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//   };
// };

// export const addToCartRequest = (data) => {
//   console.log('data', data);
//   return dispatch => {

//     const cart = {
//       products: [...products, { ...data.product, amount: data.amount }],
//       amount: cart.amount + data.amount,
//     }

//     localStorage.setItem('cart', JSON.stringify(cart))
//     dispatch(addProduct(data));
//   };
// };

export const sendOrderRequest = (order) => {
  return async dispatch => {

    dispatch(startRequest());

    try {
      let res = await axios.post(`${API_URL}/order`, order);
      console.log('res', res);

      dispatch(sendOrder(res));
      dispatch(endRequest());
      localStorage.removeItem('cart');
    }
    catch (err) {
      dispatch(errorRequest());
    }
  };
};

/* initial state */
const initialState = {
  products: [],
  amount: 0,
  total: 0,
  delivery: 10,
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

/* reducer */
export const reducer = (statePart = initialState, action = {}) => {
  console.log('state', statePart);
  console.log('action', action);
  switch (action.type) {
    case ADD_TO_CART: {
      const { products } = statePart;
      const { _id, price } = action.payload.product;

      if (products.length) {

        let isInCart = false;

        for (let product of products) {
          if (product._id === _id) {
            isInCart = true;
          }
        }

        return {
          ...statePart,
          products: products.map(el => {
            return el._id === _id ?
              { ...el, amount: el.amount + action.payload.amount }
              : el;
          }),
          amount: statePart.amount + action.payload.amount,
          total: statePart.total + (price * action.payload.amount),
        }

      } else {
        return {
          ...statePart,
          products: [...products, { ...action.payload.product, amount: action.payload.amount }],
          amount: statePart.amount + action.payload.amount,
          total: statePart.total + (price * action.payload.amount),
        };
      }
    }
    case CHANGE_AMOUNT: {

      return {
        ...statePart,
        products: statePart.products.map(el => {
          return el._id === action.payload.id ?
            { ...el, amount: action.payload.amount }
            : el;
        }),
      };
    }
    case ADD_NOTES: {
      return {
        ...statePart,
        products: statePart.products.map(el => {
          return el._id === action.payload.id ?
            { ...el, notes: action.payload.notes }
            : el;
        }),
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(el => el._id !== action.payload._id),
      };
    }
    case SEND_ORDER: {
      return {
        ...statePart,
        products: [],
        amount: 0,
        total: 0,
      };
    }
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    case LOAD_CART: {
      return { ...statePart,
        products: action.payload ? action.payload : [],
      };
    }
    default: {
      return statePart;
    }
  }
};

