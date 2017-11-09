const defaultState = {
    status: 'NONE',
    titles: []
}

export default function MovieSearchReducer(state = defaultState, { type,payload }){
    switch(type){
        case 'GET_MOVIE': {
            return {
                ...state,
                status: 'PENDING',
            }
        }

        case 'GET_MOVIE_SUCCESS': {
            return {
                ...state,
                status: 'SUCCESS',
                titles: payload
            }
        }

        case 'GET_MOVIE_ERROR': {
            return {
                ...state,
                status: 'ERROR',
                error: payload,
            }
        }

        default: {
            return state;
        }
    }
}