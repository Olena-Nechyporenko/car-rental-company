import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Header, LogoLink, NavList, Container, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <LogoLink to="/">Car rental company</LogoLink>
        <nav>
          <NavList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Cars</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};
