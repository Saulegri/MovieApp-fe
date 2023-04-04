import { Routes, Route } from 'react-router-dom';
import MoviesListContainer from 'containers/MoviesListContainer';
import MovieInfoContainer from 'containers/MovieInfoContainer';

import { RouteKey } from './routes';

const MainRouter = (): JSX.Element => (
  <Routes>
    <Route element={<MoviesListContainer />} path={RouteKey.Index} />
    <Route element={<MoviesListContainer />} path={RouteKey.Movies} />
    <Route element={<MovieInfoContainer />} path={RouteKey.Movie} />
  </Routes>
);

export default MainRouter;
