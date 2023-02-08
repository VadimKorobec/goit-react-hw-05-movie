import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 250px;
  height: auto;
  display: block;
  margin-bottom: 5px;
`;
export const ImageBox = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;
export const AditionalBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Link = styled(NavLink)`
  margin-bottom: 5px;
  &:visited,
  &:link {
    color: blue;
  }
`;
