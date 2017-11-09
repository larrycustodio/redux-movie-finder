const defaultState = {
    Response: false
};

export default function MovieTitlesReducer(state = defaultState, { type,payload }){
    switch(type){
        case 'GET_MOVIE_DETAIL': {
            return {
                ...state
            }
        }

        case 'GET_MOVIE_DETAIL_SUCCESS': {
            return {
                ...payload
            }
        }

        case 'GET_MOVIE_DETAIL_ERROR': {
            return {
                ...state,
                error: payload,
            }
        }

        default: {
            return state;
        }
    }
}