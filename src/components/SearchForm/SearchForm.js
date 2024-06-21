import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { FormStyle, ButtonStyle } from './SearchForm.styled';
import { fetchCarBrands, fetchAdverts } from '../../redux/Ads/operations';
import { selectCarBrands } from '../../redux/Ads/selectors';
import { setFilterMake } from '../../redux/Ads/filterSlice';
export const SearchForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const marks = useSelector(selectCarBrands);
  const [selectedMake, setSelectedMake] = useState('');

  useEffect(() => {
    dispatch(fetchCarBrands());
  }, [dispatch]);

  const handleSelectChange = e => {
    setSelectedMake(e.target.value);
  };

  const handleFormSubmit = async values => {
    if (selectedMake !== '') {
      await dispatch(fetchAdverts({ page: 1, limit: 12 }));
    }

    dispatch(setFilterMake(selectedMake));
    onSubmit(values);
  };

  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleFormSubmit}>
      {({ setFieldValue }) => (
        <FormStyle id="search-form" role="search">
          {marks.length > 0 && (
            <select
              name="search"
              onChange={handleSelectChange}
              onFocus={() => setSelectedMake('')}
              style={{
                display: 'block',
                marginTop: '8px',
                padding: '12px',
                width: '224px',
              }}
            >
              <option value="">Select a car brand</option>
              {marks.map((mark, index) => (
                <option key={index} value={mark}>
                  {mark}
                </option>
              ))}
            </select>
          )}
          <ButtonStyle
            type="submit"
            onSubmit={values => {
              onSubmit(values);
            }}
          >
            Search
          </ButtonStyle>
        </FormStyle>
      )}
    </Formik>
  );
};
