import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constans';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMoviesCast(moviesId).then(setCast);
  }, [moviesId]);
  return (
    <div>
      <ul>
        {cast.map(cast => (
          <li key={cast.id}>
            <img src={BASE_IMG_URL + cast.profile_path} alt={cast.name} />
            <div>
              <p>{cast.original_name}</p>
              <p>Character: {cast.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
