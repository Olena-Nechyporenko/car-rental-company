import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 50px;
    max-width: 1440px;
  }
`;

export const LogoLink = styled(NavLink)`
  font-family: inherit;
  font-weight: 600;
  font-size: 25px;
  line-height: 1.1;
  color: var(--accent-color);
  padding: 20px 0;
  filter: drop-shadow(1px 1px 1px #3470ff);
`;

export const NavList = styled.ul`
  display: flex;
  gap: 15px;
`;

export const Link = styled(NavLink)`
  display: block;
  font-family: inherit;
  font-weight: 500;
  font-size: 25px;
  line-height: 1.1;
  color: var(--accent-color);
  padding: 20px 0;
  transition: all var(--main-transition);

  &:hover {
    color: #94b3ff;
  }

  &.active {
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--accent-color);
      margin-top: 3px;
    }
  }
`;

export const Container = styled.main`
  max-width: 375px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
