import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { loadDevTools } from './reduxDevTools';

const store = () =>
  createStore(rootReducer, compose(applyMiddleware(thunk), loadDevTools()));

export default store;
