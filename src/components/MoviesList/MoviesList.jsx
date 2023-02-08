import { NavLink, useLocation } from 'react-router-dom';

export const Movieslist = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {' '}
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
