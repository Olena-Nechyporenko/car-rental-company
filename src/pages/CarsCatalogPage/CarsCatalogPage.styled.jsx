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
  text-decoration: underline;
  text-decoration-skip-ink: none;
  background-color: transparent;
  color: #3470ff;
  border: none;
  margin: 0 auto;
  cursor: pointer;
`;
