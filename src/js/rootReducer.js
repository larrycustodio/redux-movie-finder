import { combineReducers } from 'redux';
import movieSearchReducer from './reducers/movieSearchReducer';
import movieDetailReducer from './reducers/movieDetailReducer';
import trendingMovieReducer from './reducers/movieTrendingReducer';

const rootReducer = combineReducers({
    titles: movieSearchReducer,
    trending: trendingMovieReducer,
    movie: movieDetailReducer
});

export default rootReducer;