import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteList } from '../../redux/Auth/operations';
import {
  selectFavoriteList,
  selectIsLoggedIn,
} from '../../redux/Auth/selectors';
import { CarList } from '../../components/CarList/CarList';

const Favorite = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favoriteList = useSelector(selectFavoriteList);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavoriteList());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      {isLoggedIn && favoriteList.length > 0 ? (
        <CarList adverts={favoriteList} />
      ) : (
        <p>No favorite adverts found.</p>
      )}
    </div>
  );
};

export default Favorite;
