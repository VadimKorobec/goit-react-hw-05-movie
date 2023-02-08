import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constans';
// import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    getMoviesCast(moviesId).then(setCast);
    // setIsLoading(true);
  }, [moviesId]);

  return (
    <div>
      {/* {isLoading && <Loader />} */}
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

export default Cast;
