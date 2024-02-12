import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import {
  LabelStyleForm,
  FormStyle,
  // MieleageStyleForm,
  ButtonStyle,
  // FieldStyleMileage,
  FieldStyleMark,
  // FieldStylePrice,
} from './SearchForm.styled';

export const SearchForm = ({ setMake }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const make = searchParams.get('make') ?? '';
  console.log('make', make);

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    } else {
      setSearchParams({ make: evt.target.value });
    }
  };

  return (
    <div>
      <Formik
        initialValues={searchParams}
        onSubmit={values => {
          // Виконати пошук при натисканні кнопки "Search"
          setSearchParams(values);
          setMake(searchParams.get('make'));
        }}
      >
        {({ handleSubmit }) => (
          <FormStyle autoComplete="off">
            <LabelStyleForm htmlFor="make">
              Car brand
              <FieldStyleMark
                type="string"
                name="make"
                placeholder="Enter the text"
                onChange={updateQueryString}
                value={make}
              ></FieldStyleMark>
            </LabelStyleForm>
            {/* <LabelStyleForm htmlFor="rentalPrice">
            Price / 1 hour
            <FieldStylePrice
              type="string"
              name="rentalPrice"
              placeholder="To $"
              onChange={evt => evt.target.value}
              value={rentalPrice}
            />
          </LabelStyleForm>

          <LabelStyleForm htmlFor="mileage">
            Сar mileage / km
            <MieleageStyleForm>
              <FieldStyleMileage
                left="true"
                type="number"
                name="mileage.from"
                placeholder="From "
                onChange={evt => evt.target.value}
                value={mileage}
              />
              <FieldStyleMileage
                type="number"
                name="mileage.to"
                placeholder="To"
                onChange={evt => evt.target.value}
                value={mileage}
              />
            </MieleageStyleForm> */}
            {/* </LabelStyleForm> */}
            <ButtonStyle type="button" onClick={handleSubmit}>
              Search
            </ButtonStyle>
          </FormStyle>
        )}
      </Formik>
    </div>
  );
};
