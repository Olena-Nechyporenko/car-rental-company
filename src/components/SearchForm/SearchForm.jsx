import { Formik, Form } from 'formik';
import {
  FormWrapper,
  Label,
  InputBrand,
  InputPrice,
  // InputWrapp,
  // InputFrom,
  // InputTo,
  SearchButton,
} from './SearchForm.styled';
import { useState } from 'react';
// import Select from 'react-dropdown-select';

// const options = [
//   {
//     value: 1,
//     label: 'Leanne Graham',
//   },
//   {
//     value: 2,
//     label: 'Ervin Howell',
//   },
// ];

export const SearchForm = () => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    console.log(brand);
  };
  return (
    <Formik
      // initialValues={initialValues}
      // validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <FormWrapper>
          <Label htmlFor="color">
            Car brand
            <InputBrand
              as="select"
              name="color"
              onChange={e => setBrand(e.target.value)}
              value={brand}
            >
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </InputBrand>
            {/* <span >
              <ErrorMessage name="name" />
            </span> */}
          </Label>
          <Label htmlFor="price">
            Price/ 1 hour
            <InputPrice
              as="select"
              name="price"
              onChange={e => setPrice(e.target.value)}
              value={price}
            >
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </InputPrice>
          </Label>
          {/* <Label htmlFor="num">
            Сar mileage / km
            <InputFrom type="text" name="num" />
            <InputTo type="text" name="num" />
          </Label> */}
          <SearchButton type="submit">Search</SearchButton>
        </FormWrapper>
      </Form>
    </Formik>
  );
};
