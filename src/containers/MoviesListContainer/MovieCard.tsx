import { Link, generatePath } from 'react-router-dom';
import { Movie } from 'api/movies/types';
import { StarIcon } from 'components/Icons';
import { RouteKey } from 'navigation/routes';

import styles from './MovieCard.module.css';

const MovieCard = ({ posterPath, title, releaseDate, voteAverage, movieId }: Movie): JSX.Element => {
  const movieLink = generatePath(RouteKey.Movie, { id: `${movieId}` });
  return (
    <div className={styles.movieCardWrapper}>
      <Link to={movieLink}>
        <img className={styles.movieImage} src={posterPath} />
      </Link>
      <p>
        <StarIcon className={styles.starIcon} />
        <span className={styles.voteAverage}>{voteAverage}</span>
      </p>
      <div className={styles.movieInfoWrapper}>
        <span className={styles.filmTitle}>{title}</span>
        <p>
          <p className={styles.movieInfoParagraph}>{releaseDate}</p>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
