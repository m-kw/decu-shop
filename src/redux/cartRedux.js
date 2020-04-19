/* selectors */
export const getCart = ({ cart }) => cart;

/* action name creator */
const reducerName = 'cart';
const createActionName = name =>  `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_TO_CART });

/* thunk creators */

/* reducer */
export const reducer = (statePart = {}, action = {}) => {
  console.log('state', statePart);
  console.log('action', action);
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload.product ],
        amount: statePart.amount + action.payload.amount,
      };
    }
    default: {
      return statePart;
    }
  }
};

