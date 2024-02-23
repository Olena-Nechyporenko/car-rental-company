import styled from 'styled-components';
import image from './car.jpg';

export const Wrapper = styled.div`
  //   height: 100vh;
  //   width: 1400px;
  //   background-image: linear-gradient(
  //       rgba(46, 47, 66, 0.7),
  //       rgba(46, 47, 66, 0.7)
  //     ),
  //     url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  //   top: 0;
  //   left: 0;
  //   z-index: -20;
  //   position: absolute;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 25px;
  line-height: 1.1;
  color: var(--accent-color);
`;
