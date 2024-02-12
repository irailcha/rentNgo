import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CarList } from '../../components/CarList/CarList';
import { Loader } from '../../components/helpers/Loader';
import { fetchAdverts } from '../../Api';
import { ButtonStyle } from './Adverts.style';
import { SearchForm } from '../../components/SearchForm/SearchForm';

const Adverts = () => {
  const [arvertList, setArvertList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoadMoreHidden, setIsLoadMoreHidden] = useState(true);
  const [favoriteList, setFavoriteList] = useState([]);
  const [make, setMake] = useState('');

  const location = useLocation();

  useEffect(() => {
    async function getAdverts() {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await fetchAdverts(page);

        setArvertList(prevList => [...prevList, ...result]);

        setIsLoadMoreHidden(false);

        if (result.length < 12) {
          setIsLoadMoreHidden(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getAdverts();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const changeFavoriteList = advertId => {
    setFavoriteList(prevList => {
      const favoriteAdvert = prevList.some(item => item === advertId);
      if (favoriteAdvert) {
        const updateFavoriteList = prevList.filter(item => item !== advertId);
        localStorage.setItem(
          'favoriteList',
          JSON.stringify(updateFavoriteList)
        );
        console.log('Видалено', updateFavoriteList);
        return updateFavoriteList;
      } else {
        const updateFavoriteList = [...prevList, advertId];
        localStorage.setItem(
          'favoriteList',
          JSON.stringify(updateFavoriteList)
        );
        console.log('Додано', updateFavoriteList);
        return updateFavoriteList;
      }
    });
  };

  const visibleAdverts = arvertList.filter(advert =>
    advert.make.toLowerCase().includes(make.toLowerCase())
  );
  console.log(visibleAdverts);

  return (
    <div>
      <SearchForm setMake={setMake} />

      {isLoading && !isError && <Loader />}
      <Link to="/adverts/favorite" state={{ from: location }}>
        Go to Favorites
      </Link>
      {visibleAdverts.length > 0 && (
        <CarList
          visibleAdverts={visibleAdverts}
          favoriteList={favoriteList}
          changeFavoriteList={changeFavoriteList}
        />
      )}

      {!isLoadMoreHidden && (
        <ButtonStyle onClick={loadMore}>Load More</ButtonStyle>
      )}
    </div>
  );
};

export default Adverts;
