import styled from 'styled-components';
import { IoIosHeartEmpty } from 'react-icons/io';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0;
`;

export const Item = styled.li`
  width: 274px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  border-radius: 14px;
  width: 274px;
  height: 268px;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const Img = styled.img`
  width: 274px;
  height: 268px;
`;

export const IconFavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const Svg = styled(IoIosHeartEmpty)`
  width: 18px;
  height: 18px;
  color: rgba(255, 255, 255, 0.8);

  &:hover {
    fill: blue;
  }
`;

export const DescrWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const BrandTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;
export const Price = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 28px;
`;
export const City = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const Button = styled.button`
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  border-radius: 12px;
  padding: 12px 97px;
  height: 44px;
  background: #3470ff;
  cursor: pointer;
`;
