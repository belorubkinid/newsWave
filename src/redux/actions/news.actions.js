/* eslint-disable no-console */
/* eslint-disable func-names */

import axios from 'axios';
import { INIT_NEWS, GET_NEWS } from '../types';
import { endLoading } from './loading.actions';

export function initNews(keyWords) {
  return async function (dispatch) {
    try {
      const news = await axios.get(
        'https://newsapi.org/v2/everything',
        {
          params: {
            q: keyWords,
            from: '2023-07-24',
            sortBy: 'popularity',
            apiKey: process.env.API_KEY,
            pageSize: 20,
            page: 1,
          },
        },
      );
      dispatch({
        type: INIT_NEWS,
        payload: news.data.articles,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNews(keyWords, page) {
  return async function (dispatch) {
    try {
      const news = await axios.get(
        'https://newsapi.org/v2/everything',
        {
          params: {
            q: keyWords,
            from: '2023-07-24',
            sortBy: 'popularity',
            apiKey: process.env.API_KEY,
            pageSize: 20,
            page,
          },
        },
      );
      dispatch({
        type: GET_NEWS,
        payload: news.data.articles,
      });
      dispatch(endLoading());
    } catch (error) {
      console.log(error);
    }
  };
}
