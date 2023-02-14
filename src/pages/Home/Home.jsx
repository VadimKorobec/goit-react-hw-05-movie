import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrandingMovies } from 'services/apiService';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrandingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trening today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
