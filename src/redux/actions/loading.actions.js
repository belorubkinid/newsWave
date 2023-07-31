import { END_LOADING, START_LOADING } from '../types';

export function startLoading() {
  return ({
    type: START_LOADING,
  });
}

export function endLoading() {
  return ({
    type: END_LOADING,
  });
}
