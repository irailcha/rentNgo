import React from 'react';
import { Formik } from 'formik';
import { FormStyle, ButtonStyle, LabelStyleForm,FieldStyleMark  } from './SearchForm.style';
import adverts from '../../adverts';


export const SearchForm = ({onSubmit}) => {

const uniqueMakes=[...new Set(adverts.map(advert => advert.make))]

  return (
    <Formik initialValues={{make: '' }} 
    onSubmit={values => {
   onSubmit(values);

      }}>
    {({ handleSubmit, handleChange })=>(
        <FormStyle id="search-form" role="search" onSubmit={handleSubmit}>
        <LabelStyleForm htmlFor="make">
              Car brand
              <FieldStyleMark
                as="select"
                name="make"
                onChange={handleChange}
              >
            <option value="">All</option>
            {uniqueMakes.map((make, index)=>(
                <option key={index} value={make}>{make}</option>
            ))}
              </FieldStyleMark>
            </LabelStyleForm>
        <ButtonStyle type="submit">
            Search
          </ButtonStyle>
          </FormStyle>
)}
    </Formik>
  )}