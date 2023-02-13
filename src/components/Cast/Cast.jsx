import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constans';
import { Loader } from 'components/Loader/Loader';
import { placeholder } from '../../img/placeholder.png';
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
      <List>
        {cast.map(cast => (
          <ListItem key={cast.id}>
            <IMG src={BASE_IMG_URL + cast.profile_path} alt={cast.name} />
            <TextWrapper>
              <p>{cast.original_name}</p>
              <p>Character: {cast.character}</p>
            </TextWrapper>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Cast;
