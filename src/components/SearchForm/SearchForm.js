import { Formik } from 'formik';
import { FormStyle, FieldStyleMark } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={{ search: '' }} onSubmit={onSubmit}>
      {({ handleChange }) => (
        <FormStyle id="search-form" role="search">
          <FieldStyleMark
            placeholder="Search"
            type="search"
            name="search"
            onChange={handleChange}
          />
          <button type="submit" style={{ display: 'none' }}></button>
        </FormStyle>
      )}
    </Formik>
  );
};
