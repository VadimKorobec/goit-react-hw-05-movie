import { useLocation } from 'react-router-dom';
import { Link, TrendingList } from './MoviesList.styled';
import { BASE_IMG_URL } from 'services/constants';
import placeholder from '../../img/placeholder.webp'

export const Movieslist = ({ movies }) => {
  const location = useLocation();

  return (
    <TrendingList>
      {movies.map(({ id, title, poster_path, vote_average, release_date }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img src={poster_path ? BASE_IMG_URL + poster_path : placeholder}
              alt={title} />
            <p>{ title}({release_date.slice(0, 4)})</p>
          </Link>
        </li>
      ))}
    </TrendingList>
  );
};
