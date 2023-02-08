import { useEffect, useState } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { getMoviesDetails } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constans';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { moviesId } = useParams();

  useEffect(() => {
    getMoviesDetails(moviesId).then(setDetails);
  }, [moviesId]);

  if (!details) {
    return null;
  }

  const handleGoBack = () => {
    navigate(location.state.from);
  };
  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        Go Back
      </button>
      <img
        src={BASE_IMG_URL + details.poster_path}
        alt={details.title}
        width="300"
      />
      <h1>{details.title}</h1>
      <p>User Score: {details.vote_average * 10}%</p>
      <h3>Overview</h3>
      <p>{details.overview}</p>
      <h3>Genres</h3>
      <p>{details.genres.map(genre => genre.name).join(', ')}</p>
      <NavLink to="cast" state={{ from: location.state.from }}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={{ from: location.state.from }}>
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
