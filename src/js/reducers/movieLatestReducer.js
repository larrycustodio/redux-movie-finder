import { types } from '../actions/movieActions';

const defaultState = {
    uploaded: false,
    error: false,
    data: {}
};

export default function latestMovieReducer(state = defaultState, { type, payload }) {
    switch (type) {
        case `${types.GET_MOVIE_LATEST}_PENDING`: {
            return {
                ...state,
                ...payload
            }
        }

        case `${types.GET_MOVIE_LATEST}_SUCCESS`: {
            return {
                ...state,
                ...payload
            }
        }

        case `${types.GET_MOVIE_LATEST}_ERROR`: {
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