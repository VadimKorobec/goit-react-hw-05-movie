import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px; ;
`;
export const ListItem = styled.li`
  display: block;
  width: 200px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 4px;
`;
export const IMG = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;
