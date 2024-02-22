// Adverts.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAdvertsAsync,
  setMake,
  changeFavoriteList,
} from '../../redux/Advert/advertSlice';

import { CarList } from '../../components/CarList/CarList';
import { Loader } from '../../components/helpers/Loader';
import { ButtonStyle } from './Adverts.style';
import { SearchForm } from '../../components/SearchForm/SearchForm';

const Adverts = () => {
  const dispatch = useDispatch();
  const {
    advertList,
    isLoading,
    isError,
    page,
    isLoadMoreHidden,
    favoriteList,
    make,
  } = useSelector(state => state.advert);
  const isLogin = useSelector(state => state.user.isLogin);

  useEffect(() => {
    dispatch(fetchAdvertsAsync(page));
  }, [dispatch, page]);

  const loadMore = () => {
    dispatch(fetchAdvertsAsync(page + 1));
  };

  const handleSetMake = value => {
    dispatch(setMake(value));
  };

  const handleChangeFavoriteList = advertId => {
    dispatch(changeFavoriteList(advertId));
  };

  const visibleAdverts = advertList.filter(advert =>
    advert.make.toLowerCase().includes(make.toLowerCase())
  );

  return (
    <div>
      <SearchForm setMake={handleSetMake} />
      {isLoading && !isError && <Loader />}

      {visibleAdverts.length > 0 && (
        <CarList
          visibleAdverts={visibleAdverts}
          favoriteList={favoriteList}
          changeFavoriteList={handleChangeFavoriteList}
        />
      )}

      {!isLoadMoreHidden && isLogin && (
        <ButtonStyle onClick={loadMore}>Load More</ButtonStyle>
      )}
    </div>
  );
};

export default Adverts;
