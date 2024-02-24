import { Formik, Form } from 'formik';
import {
  FormWrapper,
  Label,
  DropDownBrand,
  DropDownPrice,
  SearchButton,
  InputFrom,
  InputTo,
  InputWrapp,
} from './SearchForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { selectCars } from 'redux/cars/selectors';
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
  'Mercedes',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Chrysler',
  'Kia',
  'Land',
];

let prices = [];
for (let i = 30; i <= 300; i += 10) {
  prices.push(i);
}

export const SearchForm = () => {
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const dispatch = useDispatch();

  const brandOptions = carMakes.map(make => {
    return { value: make, label: make };
  });
  const priceOptions = prices.map(price => {
    return { value: price, label: price };
  });

  const handleSubmit = () => {
    dispatch(setFilter({ brand, price, from, to }));
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
          <InputWrapp>
            Сar mileage / km
            <InputFrom
              type="text"
              name="from"
              placeholder="From"
              onChange={e => setFrom(e.target.value)}
            />
            <InputTo
              type="text"
              name="to"
              placeholder="To"
              onChange={e => setTo(e.target.value)}
            />
          </InputWrapp>
          <SearchButton type="submit">Search</SearchButton>
        </FormWrapper>
      </Form>
    </Formik>
  );
};
