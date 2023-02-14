import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constants';
import placeholder from '../../img/placeholder.webp';
import { IMG, List, ListItem, TextWrapper } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isloading, setIsLoading] = useState(false)
    const { id } = useParams();

  useEffect(() => {
    setIsLoading(true)
    const fetchCast = async () => {
      try {
        const moviesCast = await getMoviesCast(id);
        setCast(moviesCast);
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchCast()
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
