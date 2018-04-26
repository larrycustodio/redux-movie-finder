import { combineReducers } from 'redux';
import movieSearchReducer from './reducers/movieSearchReducer';
import movieDetailReducer from './reducers/movieDetailReducer';
import latestMovieReducer from './reducers/movieLatestReducer';

const rootReducer = combineReducers({
    titles: movieSearchReducer,
    latest: latestMovieReducer,
    movie: movieDetailReducer
});

export default rootReducer;