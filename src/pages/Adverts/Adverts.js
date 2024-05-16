import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarCard } from '../../components/CarCard/CarCard';
import sprite from '../../images/sprite.svg#sprite';
import {
  CardListStyle,
  CardItemStyle,
  ButtonFavoriteStyle,
  IconFavoriteStyle,
} from '../../components/CarList/CarList.styled';
import { fetchAdverts } from '../../redux/Ads/operations';
import { Loader } from '../../components/helpers/Loader';
import { selectIsLoading, selectAdverts } from '../../redux/Ads/selectors';
import { ButtonStyle } from './Adverts.style';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Adverts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);
  const [page, setPage] = useState(1);
  const [isLoadMoreHidden, setIsLoadMoreHidden] = useState(true);
  const [loadedAdverts, setLoadedAdverts] = useState([]);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchAdverts({ page, limit: 12 }));
    }
  }, [dispatch, page]);

  useEffect(() => {
    if (adverts.length < 12) {
      setIsLoadMoreHidden(true);
    } else {
      setIsLoadMoreHidden(false);
    }
  }, [adverts]);

  const loadMore = () => {
    if (isLoading) return;
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    setLoadedAdverts(prevAdverts => [...prevAdverts, ...adverts]);
  }, [adverts]);

  return (
    <div>
      <SearchForm />
      {isLoading && <Loader />}

      <CardListStyle>
        {loadedAdverts.map(advert => (
          <CardItemStyle key={advert._id}>
            <ButtonFavoriteStyle
              onClick={() => console.log('Зміна улюбленого оголошення')}
            >
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
export default Adverts;
