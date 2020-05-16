import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import input from './input';

export const createRootReducer = (history) =>
  combineReducers({
    // auth,
    input,
    router: connectRouter(history)
  });