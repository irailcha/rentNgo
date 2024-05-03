import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarCard } from '../CarCard/CarCard';
import sprite from '../../images/sprite.svg#sprite';
import {
  CardListStyle,
  CardItemStyle,
  ButtonFavoriteStyle,
  IconFavoriteStyle,
  ButtonStyle,
} from './CarList.styled';
import { fetchAdverts } from '../../redux/Ads/operations.js';
import {
  selectIsError,
  selectIsLoading,
  selectAdverts,
} from '../../redux/Ads/selectors.js';

export const CarList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectIsError);
  const loading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);
  const [isLoadMoreHidden, setIsLoadMoreHidden] = useState(true);
  const [page, setPage] = useState(1);
  const [make, setMake] = useState('');
  const [filteredAdverts, setFilteredAdverts] = useState([]);

  useEffect(() => {
    async function getAdverts() {
      try {
        await dispatch(fetchAdverts(page));
        setIsLoadMoreHidden(false);
        if (adverts.length < 12) {
          setIsLoadMoreHidden(true);
        }
      } catch (error) {
        // Обробка помилки
      }
    }
    getAdverts();
  }, [page, dispatch]);

  // useEffect(() => {
  //   setFilteredAdverts(adverts.filter(advert => advert.make === make));
  // }, [adverts, make]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <CardListStyle>
        {loading && !error}
        {adverts.map(advert => (
          <CardItemStyle key={advert._id}>
            <ButtonFavoriteStyle>
              <IconFavoriteStyle>
                <use href={`${sprite}#icon-normal-1`}></use>
              </IconFavoriteStyle>
            </ButtonFavoriteStyle>
            <CarCard car={advert} />
          </CardItemStyle>
        ))}
      </CardListStyle>

      {!isLoadMoreHidden && (
        <ButtonStyle onClick={loadMore}>Load More</ButtonStyle>
      )}
    </div>
  );
};
