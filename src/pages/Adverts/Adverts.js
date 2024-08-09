import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarList } from '../../components/CarList/CarList';
import { fetchAdverts } from '../../redux/Ads/operations';
import { Loader } from '../../components/helpers/Loader';
import { ButtonStyle, ButtonUpPage } from './Adverts.style';
import { GoArrowUp } from 'react-icons/go';
import { selectIsLoading, selectAdverts } from '../../redux/Ads/selectors';
import { fetchFavoriteList } from '../../redux/Auth/operations';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';

const Adverts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [page, setPage] = useState(1);
  const [isLoadMoreHidden, setIsLoadMoreHidden] = useState(true);
  const [loadedAdverts, setLoadedAdverts] = useState([]);

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit: 12 }));
  }, [dispatch, page]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavoriteList());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    setLoadedAdverts(prevAdverts => {
      const newAdverts = adverts;
      return [...prevAdverts, ...newAdverts];
    });

    setIsLoadMoreHidden(adverts.length < 12);
  }, [adverts]);

  const loadMore = () => {
    if (isLoading) return;
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const savedAdverts = localStorage.getItem('loadedAdverts');
    if (savedAdverts) {
      setLoadedAdverts(JSON.parse(savedAdverts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('loadedAdverts', JSON.stringify(loadedAdverts));
  }, [loadedAdverts]);

  return (
    <div style={{ position: 'relative', height: 'auto' }}>
      {isLoading && <Loader />}
      <CarList adverts={loadedAdverts} />
      {!isLoadMoreHidden && (
        <ButtonStyle onClick={loadMore}>Load More</ButtonStyle>
      )}
      <ButtonUpPage onClick={() => window.scrollTo(0, 0)}>
        <GoArrowUp />
      </ButtonUpPage>
    </div>
  );
};

export default Adverts;
