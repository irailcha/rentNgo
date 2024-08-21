import React, { useState, useEffect, useCallback } from 'react';
import { CarList } from '../../components/CarList/CarList';
import { ButtonStyle, ButtonUpPage, ContainerAdverts } from './Adverts.style';
import { GoArrowUp } from 'react-icons/go';
import { Loader } from '../../components/helpers/Loader';
import advertsData from '../../adverts.js'; 

const Adverts = () => {
  const [adverts] = useState(advertsData);
  const [loadedAdverts, setLoadedAdverts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 12;

  const loadMore = useCallback(() => {
    const nextPage = currentPage + 1;
    const nextAdverts = adverts.slice(0, nextPage * itemsPerPage);
    const uniqueAdverts = [
      ...new Map(nextAdverts.map(advert => [advert.id, advert])).values()
    ];
    setLoadedAdverts(uniqueAdverts);
    setCurrentPage(nextPage);
    localStorage.setItem('loadedAdverts', JSON.stringify(uniqueAdverts));
  }, [adverts, currentPage, itemsPerPage]);

  useEffect(() => {
    setIsLoading(true);
    const savedAdverts = localStorage.getItem('loadedAdverts');
    if (savedAdverts) {
      const parsedAdverts = JSON.parse(savedAdverts);
      setLoadedAdverts(parsedAdverts);
      setCurrentPage(Math.ceil(parsedAdverts.length / itemsPerPage));
    } else {
      loadMore();
    }
    setIsLoading(false);
  }, [loadMore, itemsPerPage]);

  useEffect(() => {
    if (adverts.length === 0) {
      setError('No adverts found');
      return;
    }
    loadMore();
  }, [adverts, loadMore]);

  const isLoadMoreHidden = loadedAdverts.length >= adverts.length;

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ContainerAdverts style={{ position: 'relative', height: 'auto' }}>
      {isLoading ? (
        <Loader /> 
      ) : (
        <>
          <CarList adverts={loadedAdverts}/>
          {!isLoadMoreHidden && (
            <ButtonStyle onClick={loadMore}>Load More</ButtonStyle>
          )}
          <ButtonUpPage onClick={() => window.scrollTo(0, 0)}>
            <GoArrowUp />
          </ButtonUpPage>
        </>
      )}
    </ContainerAdverts>
  );
};

export default Adverts;
