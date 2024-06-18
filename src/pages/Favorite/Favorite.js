import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchFavoriteList } from '../../redux/Auth/operations';
import {
  selectFavoriteList,
  selectIsLoggedIn,
} from '../../redux/Auth/selectors';
import { CarList } from '../../components/CarList/CarList';
import { MessageStyle, LinkStyle } from './Favorite.style';
import { GoArrowLeft } from 'react-icons/go';

const Favorite = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favoriteList = useSelector(selectFavoriteList);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavoriteList());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <LinkStyle to="/adverts" state={{ from: location.pathname }}>
        <span>
          <GoArrowLeft />
        </span>{' '}
        Back to adverts
      </LinkStyle>
      {isLoggedIn && favoriteList.length > 0 ? (
        <CarList adverts={favoriteList} />
      ) : (
        <MessageStyle>You haven't added any favorite ads yet</MessageStyle>
      )}
    </div>
  );
};

export default Favorite;
