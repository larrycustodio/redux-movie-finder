const defaultState = {
    status: 'NONE',
    movieList: [],
}

export default function MovieReducer(state = defaultState, { type,payload }){
    switch(type){
        case 'GET_MOVIE': {
            return {
                ...state,
            }
        }

        case 'GET_MOVIE_SUCCESS': {
            console.log(payload.Search);
            return {
                ...state,
                movieList: [
                    ...state.movieList,
                    payload.Search
                ]
            }
        }

        case 'GET_MOVIE_ERROR': {
            return {
                ...state,
                status: 'error',
                error: payload,
            }
        }

        default: {
            return state;
        }
    }
}