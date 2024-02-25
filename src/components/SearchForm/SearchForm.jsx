import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/cars/slice';
import {
  FormWrapper,
  Label,
  DropDownBrand,
  DropDownPrice,
  SearchButton,
  InputFrom,
  InputTo,
  InputWrapp,
  LabelWrapp,
  customBrandStyles,
  customPriceStyles,
} from './SearchForm.styled';

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
              styles={customBrandStyles}
              required
            />
          </Label>
          <Label htmlFor="prices">
            Price/ 1 hour
            <DropDownPrice
              isSearchable
              onChange={setPrice}
              options={priceOptions}
              placeholder="To $"
              styles={customPriceStyles}
              required
            />
          </Label>
          <LabelWrapp>
            Сar mileage / km
            <InputWrapp>
              <InputFrom
                type="number"
                name="from"
                placeholder="From"
                onChange={e => setFrom(e.target.value)}
              />
              <InputTo
                type="number"
                name="to"
                placeholder="To"
                onChange={e => setTo(e.target.value)}
              />
            </InputWrapp>
          </LabelWrapp>
          <SearchButton type="submit">Search</SearchButton>
        </FormWrapper>
      </Form>
    </Formik>
  );
};
