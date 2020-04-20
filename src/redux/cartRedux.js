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

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_TO_CART });
export const changeAmount = payload => ({ payload, type: CHANGE_AMOUNT });
export const addNotes = payload => ({ payload, type: ADD_NOTES });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });

/* thunk creators */

/* reducer */
export const reducer = (statePart = {}, action = {}) => {
  console.log('state', statePart);
  console.log('action', action);
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...statePart,
        products: [...statePart.products, { ...action.payload.product, amount: action.payload.amount } ],
        amount: statePart.amount + action.payload.amount,
        total: statePart.total + (action.payload.product.price * action.payload.amount),
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
    default: {
      return statePart;
    }
  }
};

