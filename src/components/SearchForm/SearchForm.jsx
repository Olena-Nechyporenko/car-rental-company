import { Formik, Form } from 'formik';
import {
  FormWrapper,
  Label,
  DropDownBrand,
  DropDownPrice,
  SearchButton,
} from './SearchForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/selectors';
import { setFilter } from 'redux/cars/slice';

const carMakes = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

export const SearchForm = () => {
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);

  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const brandOptions = carMakes.map(make => {
    return { value: make, label: make };
  });
  const priceOptions = cars.map(({ rentalPrice }) => {
    return { value: rentalPrice, label: rentalPrice };
  });

  const handleSubmit = () => {
    dispatch(setFilter(brand.value));
  };

  return (
    <Formik
      initialValues={{ brands: brand, prices: price }}
      // validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <FormWrapper>
          <Label htmlFor="brands">
            Car brand
            <DropDownBrand
              isSearchable
              onChange={setBrand}
              options={brandOptions}
              placeholder="Enter the text"
            />
            {/* <span >
              <ErrorMessage name="name" />
            </span> */}
          </Label>
          <Label htmlFor="prices">
            Price/ 1 hour
            <DropDownPrice
              isSearchable
              onChange={setPrice}
              options={priceOptions}
              placeholder="To $"
            />
          </Label>
          <SearchButton type="submit">Search</SearchButton>
        </FormWrapper>
      </Form>
    </Formik>
  );
};
