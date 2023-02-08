import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Img = styled.img`
  width: 250px;
  height: auto;
  display: block;
`;
export const ImageBox = styled.div`
  display: flex;
  border-bottom: 2px solid #ccc;
`;
export const AditionalBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #ccc;
`;
export const Link = styled(NavLink)`
  &:visited,
  &:link {
    color: blue;
  }
`;
