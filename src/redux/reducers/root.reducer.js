import { combineReducers } from 'redux';
import newsReducer from './news.reducer';
import loadingReducer from './loading.reducer';

const rootReducer = combineReducers({
  news: newsReducer,
  isLoading: loadingReducer,
});

export default rootReducer;
