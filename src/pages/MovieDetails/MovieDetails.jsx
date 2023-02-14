import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';
import { getMoviesDetails } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constants';
import { Loader } from 'components/Loader/Loader';
import {
  AditionalBox,
  Button,
  ImageBox,
  Img,
  Link,
} from './MoviesDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const fetchDetails = async () => {
      try {
        const moviesDetails = await getMoviesDetails(id);
        setDetails(moviesDetails);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (!details) {
    return null;
  }

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Button type="button" onClick={handleGoBack}>
            Go Back
          </Button>
          <ImageBox>
            <Img src={BASE_IMG_URL + details.poster_path} alt={details.title} />
            <div style={{ padding: 20 }}>
              <h2>{details.title}</h2>
              <p>User Score: {details.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{details.overview}</p>
              <h3>Genres</h3>
              <p>{details.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </ImageBox>
          <AditionalBox>
            <h3>Aditional information</h3>
            <Link to="cast" state={{ from: location.state.from }}>
              Cast
            </Link>
            <Link to="reviews" state={{ from: location.state.from }}>
              Reviews
            </Link>
          </AditionalBox>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetails;
