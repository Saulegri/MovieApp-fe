import { useQuery } from 'react-query';
import { getMovies } from 'api/movies';
import Loader from 'components/Loader';

import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';

const MoviesListContainer = (): JSX.Element => {
  const { data, isLoading } = useQuery('movies', getMovies);

  if (isLoading) {
    return <Loader />;
  }

  const renderMovies = () => {
    return data?.movies.map((movie) => <MovieCard key={movie.id} {...movie} />);
  };

  return <div className={styles.moviesListContainer}>{renderMovies()};</div>;
};

export default MoviesListContainer;
