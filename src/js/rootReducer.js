import { combineReducers } from 'redux';
import movieSearchReducer from './reducers/movieSearchReducer';
import movieDetailReducer from './reducers/movieDetailReducer';

const rootReducer = combineReducers({
    titles: movieSearchReducer,
    movie: movieDetailReducer
});

export default rootReducer;