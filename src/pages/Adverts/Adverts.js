import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarList } from '../../components/CarList/CarList';

import { fetchAdverts } from '../../redux/Ads/operations';
import { Loader } from '../../components/helpers/Loader';
import { selectIsLoading, selectAdverts } from '../../redux/Ads/selectors';
import { ButtonStyle, ButtonUpPage } from './Adverts.style';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { GoArrowUp } from 'react-icons/go';

const Adverts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);
  const [page, setPage] = useState(1);
  const [isLoadMoreHidden, setIsLoadMoreHidden] = useState(true);
  const [loadedAdverts, setLoadedAdverts] = useState([]);

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit: 12 }));
  }, [dispatch, page]);

  const loadMore = () => {
    if (isLoading) return;
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    setLoadedAdverts(prevAdverts => [...prevAdverts, ...adverts]);
    if (adverts.length < 12) {
      setIsLoadMoreHidden(true);
    } else {
      setIsLoadMoreHidden(false);
    }
  }, [adverts]);

  useEffect(() => {
    // Збереження оголошень в localStorage
    localStorage.setItem('loadedAdverts', JSON.stringify(loadedAdverts));
  }, [loadedAdverts]);

  useEffect(() => {
    // Завантаження оголошень з localStorage при першому рендерингу
    const savedAdverts = localStorage.getItem('loadedAdverts');
    if (savedAdverts) {
      setLoadedAdverts(JSON.parse(savedAdverts));
    }
  }, []);

  return (
    <div style={{ position: 'relative', height: 'auto' }}>
      <SearchForm />
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
