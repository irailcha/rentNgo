import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import {
  LabelStyleForm,
  FormStyle,
  ButtonStyle,
  FieldStyleMark,
} from './SearchForm.styled';

export const SearchForm = ({ setMake }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const make = searchParams.get('make') ?? '';

  const updateQueryString = (field, value) => {
    setSearchParams({ ...searchParams, [field]: value });
  };

  return (
    <div>
      <Formik
        initialValues={{
          make,
        }}
        onSubmit={values => {
          setSearchParams(values);
          setMake(values.make);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <FormStyle autoComplete="off">
            <LabelStyleForm htmlFor="make">
              Car brand
              <FieldStyleMark
                type="string"
                name="make"
                placeholder="Enter the text"
                onChange={e => {
                  handleChange(e);
                  updateQueryString('make', e.target.value);
                }}
                value={values.make}
              />
            </LabelStyleForm>
            <ButtonStyle type="submit" onClick={handleSubmit}>
              Search
            </ButtonStyle>
          </FormStyle>
        )}
      </Formik>
    </div>
  );
};
