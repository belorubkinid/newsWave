/* eslint-disable default-param-last */
import { START_LOADING, END_LOADING } from '../types';

function loadingReducer(state = false, action) {
  switch (action.type) {
    case START_LOADING: {
      return true;
    }
    case END_LOADING: {
      return false;
    }
    default: {
      return state;
    }
  }
}

export default loadingReducer;
