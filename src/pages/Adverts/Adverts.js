import React, { useState, useEffect, useCallback} from 'react';
import { CarList } from '../../components/CarList/CarList';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { ButtonStyle, ButtonUpPage, ContainerAdverts } from './Adverts.style';
import { GoArrowUp } from 'react-icons/go';
import { Loader } from '../../components/helpers/Loader';
import advertsData from '../../adverts.js'; 



const Adverts = () => {
  const [adverts] = useState(advertsData);
  const [loadedAdverts, setLoadedAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [make, setMake] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);
  const itemsPerPage = 6;



  const loadMore = useCallback(() => {
    setIsLoading(true);
    const nextPage = currentPage + 1;
    const nextAdverts = adverts.slice(0, nextPage * itemsPerPage);
    const uniqueAdverts = [
      ...new Map(nextAdverts.map((advert) => [advert.id, advert])).values(),
    ];
    setLoadedAdverts(uniqueAdverts);
    setCurrentPage(nextPage);
    localStorage.setItem('loadedAdverts', JSON.stringify(uniqueAdverts));
    setIsLoading(false);
  }, [adverts, currentPage, itemsPerPage]);

  useEffect(() => {
    const savedAdverts = localStorage.getItem('loadedAdverts');
    if (savedAdverts) {
      const parsedAdverts = JSON.parse(savedAdverts);
      setLoadedAdverts(parsedAdverts);
      setCurrentPage(Math.ceil(parsedAdverts.length / itemsPerPage));
    } else {
      loadMore();
    }
  }, [loadMore, itemsPerPage]);

  useEffect(() => {
    if (adverts.length === 0) {
      setError('No adverts found');
      return;
    }
    if (currentPage === 1) {
      loadMore();
    }
  }, [adverts, loadMore, currentPage]);

  useEffect(() => {
    if (make) {
      const filtered = adverts.filter((advert) => advert.make === make);
      setFilteredAdverts(filtered);
    } else {
      setFilteredAdverts([]);
    }
  }, [make, adverts]);

  const isLoadMoreHidden = loadedAdverts.length >= adverts.length;

  const handleSearch = (values) => {
    setMake(values.make);
  };

  const handleChangeFavorite = (advert) => {
    const isAlreadyFavorite = favoriteList.some((fav) => fav.id === advert.id);

    if (!isAlreadyFavorite) {
      setFavoriteList((prevFavoriteList) => [...prevFavoriteList, advert]);
      setIsFavorite(isFavorite);
    } else {
      setFavoriteList((prevFavoriteList) => prevFavoriteList.filter((fav) => fav.id !== advert.id));
      setIsFavorite(isFavorite);
    }
  };

  useEffect(() => {
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
  }, [favoriteList]);

  useEffect(() => {
    const favoriteAdverts = localStorage.getItem('favoriteList');
    if (favoriteAdverts) {
      const parsedAdverts = JSON.parse(favoriteAdverts);
      setFavoriteList(parsedAdverts);
    }
  }, []);

  useEffect(() => {
    console.log('Updated favoriteList:', favoriteList);
  }, [favoriteList]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ContainerAdverts style={{ position: 'relative', height: 'auto' }}>
      <SearchForm onSubmit={handleSearch} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CarList
            adverts={filteredAdverts.length > 0 ? filteredAdverts : loadedAdverts}
            favoriteList={favoriteList}
            onClick={handleChangeFavorite}
          />
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
