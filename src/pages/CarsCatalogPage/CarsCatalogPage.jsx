import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarsList } from 'components/CarsList/CarsList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Wrapper, LoadMoreBtn } from './CarsCatalogPage.styled';
import { fetchCars, fetchNextPage } from 'redux/cars/operations';
import { selectCars } from 'redux/cars/selectors';

export default function CarsCatalogPage() {
  const [currentPage, setCurrentPage] = useState(2);

  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchNextPage(currentPage));
    setCurrentPage(currentPage + 1);
  };

  return (
    <Wrapper>
      <SearchForm />
      <CarsList />
      {cars.length < 32 && cars.length >= 12 && (
        <div>
          <LoadMoreBtn type="button" onClick={handleLoadMore}>
            Load more
          </LoadMoreBtn>
        </div>
      )}
    </Wrapper>
  );
}
