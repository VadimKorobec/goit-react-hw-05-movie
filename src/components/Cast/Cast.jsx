import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constans';
import { Loader } from 'components/Loader/Loader';
import placeholder from '../../img/placeholder.webp';
import { IMG, List, ListItem, TextWrapper } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsloading(true);
    const fetchCast = async () => {
      try {
        const movieCast = await getMoviesCast(id);
        setCast(movieCast);
      } catch (error) {
        console.error(error);
      } finally {
        setIsloading(false);
      }
    };
    fetchCast();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
};

export default Cast;
