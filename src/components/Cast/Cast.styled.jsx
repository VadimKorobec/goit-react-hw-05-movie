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

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

export const CastPic = styled.img`
  width: 100%;
`;

export const CastName = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
`;

export const CastCharacter = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
`;
