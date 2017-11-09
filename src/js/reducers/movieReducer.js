const defaultState = {
    status: 'NONE',
    titles: []
}

export default function MovieReducer(state = defaultState, { type,payload }){
    switch(type){
        case 'GET_MOVIE': {
            return {
                ...state,
            }
        }

        case 'GET_MOVIE_SUCCESS': {
            return {
                ...state,
                titles: payload
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