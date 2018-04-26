import { types } from '../actions/movieActions';

const defaultState = {
    uploaded: false,
    error: false,
    data: {}
};

export default function trendingMovieReducer(state = defaultState, { type, payload }) {
    switch (type) {
        case `${types.GET_MOVIE_TRENDING}_PENDING`: {
            return {
                ...state,
                ...payload
            }
        }

        case `${types.GET_MOVIE_TRENDING}_SUCCESS`: {
            return {
                ...state,
                ...payload
            }
        }

        case `${types.GET_MOVIE_TRENDING}_ERROR`: {
            return {
                ...state,
                ...payload
            }
        }

        default: {
            return state;
        }
    }
}