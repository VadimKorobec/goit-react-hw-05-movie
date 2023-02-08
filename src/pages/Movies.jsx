import { Movieslist } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/apiService';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) {
      return;
    }
    getMoviesByQuery(searchQuery)
      .then(setMovies)
      .finally(() => {
        setQuery(searchQuery);
      });
  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();

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
      <Movieslist movies={movies} />
    </div>
  );
};

export default Movies;
