import { CarsList } from 'components/CarsList/CarsList';
import { Wrapper } from './CarsCatalogPage.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCars } from 'redux/cars/operations';
// import { selectCars } from 'redux/cars/selectors';

export default function CarsCatalogPage() {
  // const cars = useSelector(selectCars);
  const [currentPage, setCurrentPage] = useState(1);
  // const [filteredCars, setFilteredCars] = useState(cars);
  // console.log(filteredCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(currentPage));
  }, [currentPage, dispatch]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  // const handleSubmit = data => {
  //   const filtered = cars.filter(({ make }) => make.includes(data.brand.value));
  //   console.log(filtered);
  //   setFilteredCars(filtered);
  // };

  return (
    <Wrapper>
      <SearchForm />
      <CarsList pages={currentPage} />
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </Wrapper>
  );
}
