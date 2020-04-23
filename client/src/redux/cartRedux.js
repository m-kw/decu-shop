/* selectors */
export const getCart = ({ cart }) => cart;

/* action name creator */
const reducerName = 'cart';
const createActionName = name =>  `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const CHANGE_AMOUNT = createActionName('CHANGE_AMOUNT');
const ADD_NOTES = createActionName('ADD_NOTES');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const SEND_ORDER = createActionName('SEND_ORDER');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_TO_CART });
export const changeAmount = payload => ({ payload, type: CHANGE_AMOUNT });
export const addNotes = payload => ({ payload, type: ADD_NOTES });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const sendOrder = payload => ({ payload, type: SEND_ORDER });

/* thunk creators */

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

      let isInCart = false;

      for (let product of products) {
        if (product._id === _id) {
          isInCart = true;
        }
      }

      console.log('isIncart', isInCart);

      return {
        ...statePart,
        products: isInCart ?
          products.map(el => {
            return el._id === _id ?
              { ...el, amount: el.amount + action.payload.amount }
              : el;
          })
          : [...products, { ...action.payload.product, amount: action.payload.amount }],
        amount: statePart.amount + action.payload.amount,
        total: statePart.total + (price * action.payload.amount),
      };
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
        products: statePart.products.filter(el => el._id !== action.payload.id),
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
    default: {
      return statePart;
    }
  }
};

