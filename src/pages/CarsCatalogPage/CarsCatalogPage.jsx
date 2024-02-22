import { CarsList } from 'components/CarsList/CarsList';
import { Wrapper } from './CarsCatalogPage.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';

export default function CarsCatalogPage() {
  return (
    <Wrapper>
      <SearchForm />
      <CarsList />
    </Wrapper>
  );
}
