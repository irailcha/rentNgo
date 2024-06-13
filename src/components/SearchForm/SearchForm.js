import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { FormStyle, ButtonStyle } from './SearchForm.styled';
import { fetchCarBrands } from '../../redux/Ads/operations';
import { selectCarBrands } from '../../redux/Ads/selectors';

export const SearchForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const marks = useSelector(selectCarBrands);

  useEffect(() => {
    dispatch(fetchCarBrands());
  }, [dispatch]);

  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ setFieldValue }) => (
        <FormStyle id="search-form" role="search">
          {marks.length > 0 && (
            <select
              name="search"
              onChange={e => {
                setFieldValue('search', e.target.value);
                onSubmit({ search: e.target.value });
              }}
              onFocus={() => setFieldValue('search', '')}
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
          <ButtonStyle type="submit">Search</ButtonStyle>
        </FormStyle>
      )}
    </Formik>
  );
};
