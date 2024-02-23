import { Suspense } from 'react';
import { Header, LogoLink, Nav, Container, Link } from './Layout.styled';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <Header>
        <LogoLink to="/">Car rental company</LogoLink>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Cars</Link>
          <Link to="/favorites">Favorites</Link>
        </Nav>
      </Header>
      <Suspense fallback={<span>Loading page...</span>}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};