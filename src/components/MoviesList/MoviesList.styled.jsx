import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled'

export const TrendingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

export const TrendingItem = styled.li`
    display: block;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  &:hover,
  &:focus {
    color: #be7214;
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  margin-bottom: 5px;
`;