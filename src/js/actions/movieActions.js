import axios from 'axios';

//Action creators
export const getMovieSearch = searchItem => {
    return (dispatch) => {
        dispatch({
            type: 'GET_MOVIE',
        });
        axios
            .get('http://www.omdbapi.com/', {
                params: {
                    s: searchItem,
                    apikey: 'e3a3c34f',
                }
            })
            .then(res => {
                dispatch({
                    type: 'GET_MOVIE_SUCCESS',
                    payload: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: 'GET_MOVIE_ERROR',
                    payload: err,
                });
            });
    };
};

export const getMovieDetails = movieTitle => {
    return (dispatch) => {
        dispatch({
            type: 'GET_MOVIE_DETAILS'
        });
        axios
        .get('http://www.omdbapi.com/', {
            params: {
                i: movieTitle,
                apikey: 'e3a3c34f',
            }
        })
        .then(res => {
            dispatch({
                type: 'GET_MOVIE_SUCCESS',
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: 'GET_MOVIE_ERROR',
                payload: err,
            });
        });
    }
}