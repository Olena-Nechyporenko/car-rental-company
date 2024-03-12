import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 30px 20px;

  @media screen and (min-width: 768px) {
    padding: 60px 50px;
  }
  @media screen and (min-width: 1440px) {
    padding: 80px 128px;
  }
`;

export const LoadMoreBtn = styled.button`
  display: block;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  background-color: transparent;
  border: 1px solid var(--accent-color);
  border-radius: 12px;
  color: var(--accent-color);
  padding: 3px 8px;
  margin: 0 auto;
  cursor: pointer;

  transition: all var(--main-transition);

  &:hover {
    color: var(--input-color);
    background-color: var(--accent-color);
  }
`;
