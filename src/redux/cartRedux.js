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

/* reducer */
export const reducer = (statePart = {}, action = {}) => {
  console.log('state', statePart);
  console.log('action', action);
  switch (action.type) {
    case ADD_TO_CART: {
      const { products } = statePart;
      const { id, price } = action.payload.product;

      let isInCart = false;

      for (let product of products) {
        if (product.id === action.payload.product.id) {
          isInCart = true;
        }
      }

      console.log('isIncart', isInCart);

      return {
        ...statePart,
        products: products.map(el => {
          return el.id === id ?
            { ...el, amount: el.amount + action.payload.amount }
            : el;
        }),
        amount: statePart.amount + action.payload.amount,
        total: statePart.total + (price * action.payload.amount),
      };
    }
    case CHANGE_AMOUNT: {
      return {
        ...statePart,
        products: statePart.products.map(el => {
          return el.id === action.payload.id ?
            { ...el, amount: action.payload.amount }
            : el;
        }),
      };
    }
    case ADD_NOTES: {
      return {
        ...statePart,
        products: statePart.products.map(el => {
          return el.id === action.payload.id ?
            { ...el, notes: action.payload.notes }
            : el;
        }),
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(el => el.id !== action.payload.id),
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

