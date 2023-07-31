/* eslint-disable default-param-last */
import { GET_NEWS, INIT_NEWS } from '../types';

function newsReducer(state = [], action) {
  switch (action.type) {
    case INIT_NEWS: {
      return [...action.payload];
    }
    case GET_NEWS: {
      return [...state, ...action.payload];
    }
    default: {
      return state;
    }
  }
}

export default newsReducer;
