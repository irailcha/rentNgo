import React, { useEffect, useState, useMemo } from 'react';
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
  const [page] = useState(1);
  const [isLoadMoreHidden, setIsLoadMoreHidden] = useState(true);
  const [advertsList] = useState([]);

  useEffect(() => {
    dispatch(fetchAdverts(page));
    setIsLoadMoreHidden(false);
  }, [page, dispatch]);

  const loadMore = () => {
    const nextPage = page + 1;
    dispatch(fetchAdverts({ page: nextPage }));
    if (adverts.length <= 12) {
      setIsLoadMoreHidden(true);
    }
  };

  const optimizedAdvertsList = useMemo(() => {
    return [...advertsList, ...adverts];
  }, [adverts, advertsList]);

  return (
    <div>
      <CardListStyle>
        {loading && !error}
        {optimizedAdvertsList.map(advert => (
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
