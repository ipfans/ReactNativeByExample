'use strict';

// config provide store.

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore (initState) {
  const store = createStoreWithMiddleware(rootReducer, initState);
  return store;
}