import axios from 'axios';

export const types = {
    GET_MOVIE_GENRES: 'GET_MOVIE_GENRES',
    GET_MOVIE_LATEST: 'GET_MOVIE_LATEST',
    GET_MOVIE: 'GET_MOVIE',
    GET_MOVIE_DETAIL: 'GET_MOVIE_DETAIL'
};
/**
 * Retrieves movie genre description
 */
export const getMovieGenres = () => {
    return dispatch => {
        dispatch({
            type: `${types.GET_MOVIE_GENRES}_PENDING`,
        });
    }

    fetch('/api/movies/genres', { method: 'GET' })
        .then(res => res.json())
        .catch(error => {
            dispatch({
                type: `${types.GET_MOVIE_GENRES}_ERROR`,
                payload: {
                    error: true,
                    data: []
                }
            });
        })
        .then(data => {
            dispatch({
                type: `${types.GET_MOVIE_GENRES}_SUCCESS`,
                payload: {
                    uploaded: true,
                    data: [...data]
                }
            });
        });
}
/**
 * Gets most recent movies from movie API
 * Dispatched on initial home page load
 */
export const getRecentMovies = () => {
    return dispatch => {
        dispatch({
            type: `${types.GET_MOVIE_LATEST}_PENDING`,
            payload: {
                uploaded: false
            }
        });

        fetch('/api/movies/latest', { method: 'GET' })
            .then(res => res.json())
            .catch(error => {
                dispatch({
                    type: `${types.GET_MOVIE_LATEST}_ERROR`,
                    payload: {
                        error: true,
                        data: []
                    }
                });
            })
            .then(data => {
                dispatch({
                    type: `${types.GET_MOVIE_LATEST}_SUCCESS`,
                    payload: {
                        uploaded: true,
                        data: [...data.results]
                    }
                });
            });
    }
};

/**
 * Searches movie API with string query 
 * @param {String} search string query
 */
export const getMovieSearch = searchItem => {
    return (dispatch) => {
        dispatch({
            type: types.GET_MOVIE,
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
                    type: `${types.GET_MOVIE}_SUCCESS`,
                    payload: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: `${types.GET_MOVIE}_ERROR`,
                    payload: err,
                });
            });
    };
};

/**
 * Gets movie details for selected movie ID
 * @param {String} movieID from movie API 
 */
export const getMovieDetails = movieTitle => {
    return (dispatch) => {
        dispatch({
            type: `${types.GET_MOVIE_DETAIL}`,
        });
        axios
            .get('http://www.omdbapi.com/', {
                params: {
                    i: movieTitle,
                    apikey: 'e3a3c34f',
                    plot: 'full'
                }
            })
            .then(res => {
                dispatch({
                    type: `${types.GET_MOVIE_DETAIL}_SUCCESS`,
                    payload: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: `${types.GET_MOVIE_DETAIL}_ERROR`,
                    payload: err,
                });
            });
    }
}