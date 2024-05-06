import React from 'react';
import { useSelector } from 'react-redux';
// import { SearchForm } from '../../components/SearchForm/SearchForm';
import { CarList } from '../../components/CarList/CarList';
import { Loader } from '../../components/helpers/Loader';
import { selectIsError, selectIsLoading } from '../../redux/Ads/selectors';

const Adverts = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  return (
    <div>
      {/* <SearchForm setMake={setMake} /> */}
      {loading && !error && <Loader />}

      <CarList />
    </div>
  );
};
export default Adverts;
