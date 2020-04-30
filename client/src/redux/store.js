import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as productsReducer } from './productsRedux';
import { reducer as cartReducer } from './cartRedux';
import { reducer as viewportReducer } from './viewportRedux';

// define reducers
const reducers = {
  products: productsReducer,
  cart: cartReducer,
  mobile: viewportReducer,
};

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
