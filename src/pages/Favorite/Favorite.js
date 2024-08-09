import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  selectFavoriteList,
  selectIsLoggedIn,
} from '../../redux/Auth/selectors';
import { fetchFavoriteList } from '../../redux/Auth/operations';
import { CarList } from '../../components/CarList/CarList';
import { MessageStyle, LinkStyle } from './Favorite.style';
import { GoArrowLeft } from 'react-icons/go';
import { Container } from '../Home/Home.style';
const Favorite = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favoriteList = useSelector(selectFavoriteList);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavoriteList());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <Container>
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
    </Container>
  );
};

export default Favorite;
