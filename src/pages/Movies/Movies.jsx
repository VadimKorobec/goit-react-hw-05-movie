import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/apiService';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) {
      return;
    }

    const fetchMoviesByQuery = async () => {
      try {
        const moviesByQuery = await getMoviesByQuery(
          searchQuery.trim().toLowerCase()
        );
        if (!moviesByQuery.length) {
          throw new Error('Bad Query');
        }
        setMovies(moviesByQuery);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        setQuery(searchQuery.trim().toLowerCase());
      }
    };

    fetchMoviesByQuery();
  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    setSearchParams({ query });
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
