// import React from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { Formik } from 'formik';
// import {
//   LabelStyleForm,
//   FormStyle,
//   ButtonStyle,
//   FieldStyleMark,
// } from './SearchForm.styled';

// export const SearchForm = ({ setMake }) => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const make = searchParams.get('make') ?? '';

//   const updateQueryString = value => {
//     setSearchParams({ make: value });
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={{
//           make,
//         }}
//         onSubmit={() => {}}
//       >
//         {({ values, handleChange }) => (
//           <FormStyle autoComplete="off">
//             <LabelStyleForm htmlFor="make">
//               Car brand
//               <FieldStyleMark
//                 type="string"
//                 name="make"
//                 placeholder="Enter the text"
//                 onChange={e => {
//                   const inputValue = e.target.value;
//                   handleChange(e);
//                   updateQueryString(inputValue);
//                   setMake(inputValue);
//                 }}
//                 value={values.make}
//               />
//             </LabelStyleForm>
//             {/* Optionally, you can add a submit button if needed */}
//             <ButtonStyle type="submit">Search</ButtonStyle>
//           </FormStyle>
//         )}
//       </Formik>
//     </div>
//   );
// };
