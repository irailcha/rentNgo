import React, { useState, useEffect } from 'react';

import { CarList } from '../CarList/CarList';
import { Loader } from '../helpers/Loader';
import { MainContainer, ButtonStyle } from './App.styled';
import { fetchAdverts } from '../../Api';
import { ModalCarInfo } from '../ModalCarInfo/ModalCarInfo';

const App = () => {
  const [arvertList, setArvertList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoadMoreHidden, setIsLoadMoreHidden] = useState(true);
  const [advert, setAdvert] = useState({
    img: '',
    make: '',
    model: '',
    year: null,
    address: '',
    id: null,
    type: '',
    fuelConsumption: '',
    engineSize: '',
    description: '',
    accessories: '',
    mileage: null,
    rentalPrice: '',
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Code is running on the client.');
    }
    async function getAdverts() {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await fetchAdverts(page);

        setArvertList(prevList => [...prevList, ...result]);

        setIsLoadMoreHidden(false);

        console.log(result);

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

  const open = advert => {
    setAdvert(advert);
    setIsOpen(true);
  };

  return (
    <>
      <MainContainer>
        {isLoading && !isError && <Loader />}
        {arvertList.length > 0 && <CarList data={arvertList} onClick={open} />}
        {isOpen && (
          <ModalCarInfo
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            advertInfo={advert}
          />
        )}
        {!isLoadMoreHidden && (
          <ButtonStyle onClick={loadMore}>Load More</ButtonStyle>
        )}
      </MainContainer>
    </>
  );
};

export default App;
