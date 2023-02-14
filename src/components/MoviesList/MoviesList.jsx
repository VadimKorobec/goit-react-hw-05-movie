import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Img, Link, TrendingList,TrendingItem } from './MoviesList.styled';
import { BASE_IMG_URL } from 'services/constants';
import placeholder from '../../img/placeholder.webp'

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <TrendingList>
      {movies.map(({ id, title, poster_path, release_date }) => (
        <TrendingItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Img src={poster_path ? BASE_IMG_URL + poster_path : placeholder}
              alt={title} />
            <p>{ title}({release_date.slice(0, 4)})</p>
          </Link>
        </TrendingItem>
      ))}
    </TrendingList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired),
};