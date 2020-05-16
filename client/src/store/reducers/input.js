import { INPUT_CHANGED } from '../actions/types';

const INITIAL_STATE = ''

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_CHANGED:
      return action.payload
    default:
      return state;
  }
};