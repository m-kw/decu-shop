import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './initialState';
import { reducer as productsReducer } from './productsRedux';
import { reducer as cartReducer } from './cartRedux';

// define reducers
const reducers = {
  products: productsReducer,
  cart: cartReducer,
};

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
