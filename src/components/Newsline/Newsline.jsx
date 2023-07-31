/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import debounce from 'lodash.debounce';
import { getNews, initNews } from '../../redux/actions/news.actions';
import NewsSkeleton from './News/NewsSkeleton';
import News from './News/News';
import useDebounce from '../../hooks/useDebounce';
import Loader from '../Loader/Loader';
import { startLoading } from '../../redux/actions/loading.actions';

function Newsline() {
  const { news, isLoading } = useSelector((store) => store);
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(2);
  const [skeletonsCount] = useState(20);
  const [delay] = useState(1500);
  const dispatch = useDispatch();
  const debouncedIsGettingNews = useDebounce(isLoading, delay);
  const debouncedStartLoading = debounce(() => dispatch(startLoading()), 100);

  function scrollHandler(event) {
    const { scrollHeight, scrollTop } = event.target.documentElement;
    const { innerHeight } = window;
    if (scrollHeight - (scrollTop + innerHeight) < 100) {
      debouncedStartLoading();
    }
  }

  useEffect(() => {
    dispatch(initNews('economics'));
    setTimeout(() => {
      setIsFirstLoading(false);
    }, delay);
  }, []);

  useEffect(() => {
    if (debouncedIsGettingNews) {
      dispatch(getNews('economics', currentPage));
      setCurrentPage((prev) => prev + 1);
    }
  }, [debouncedIsGettingNews]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className="newsline">
      {isFirstLoading ? (
        Array(skeletonsCount).fill().map(() => <NewsSkeleton key={uuidv4()} />)
      ) : news.map((article) => (
        <News
          key={uuidv4()}
          imageURL={article.urlToImage}
          title={article.title}
          description={article.description}
        />
      ))}
      {isLoading && <Loader />}
    </div>
  );
}

export default Newsline;
