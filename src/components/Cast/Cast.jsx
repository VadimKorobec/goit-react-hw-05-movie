import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constants';
import placeholder from '../../img/placeholder.webp';
import { IMG, List, ListItem, TextWrapper } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getMoviesCast(id).then(setCast);
  }, [id]);

  return (
    <div>
      <List>
        {cast.map(({ order, profile_path, name, character }) => (
          <ListItem key={order}>
            <IMG
              src={profile_path ? BASE_IMG_URL + profile_path : placeholder}
              alt={name}
            />
            <TextWrapper>
              <p>{name}</p>
              <p>Character: {character}</p>
            </TextWrapper>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Cast;
