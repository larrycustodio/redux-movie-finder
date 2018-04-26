import React from 'react';
import { NavLink, Link } from 'react-router-dom';

/**
 * Converts movie title in kebab-lowercase form
 * @param {String} movie title 
 * @return {String} title-in-kebab-case
 */
function setImgAlt(title) {
    return title.toLowerCase().replace('/( )/', '-');
}

/**
 * Returns image URL
 * @param {String} rel img-path provided by API
 * @param {Integer} desired width size
 * @reutn {String} tmdb image URL
 */
function setImgURL(path, size = 200) {
    return `https://image.tmdb.org/t/p/w${size}${path}`;
}

/**
 * Container for single movie item at "in theaters" component
 * @param {Object} movie metadata 
 */
const LatestMovieItem = props => {
    const { movie } = props;
    return (
        <div className="movie-item latest-movie">
            <div className="poster-container">
                <img className="poster-img" src={setImgURL(movie.poster_path)} alt={setImgAlt(movie.title)} />
            </div>
            <div className="movie-title">
                {movie.title}
            </div>
        </div>
    );
}
/**
 * Container for "in theaters" front page component
 * @param {Object} latest movie store props 
 */
const LatestMovies = props => {
    const { error, uploaded, data } = props.movies;
    if (error) {
        // render state @ error occurring
        return (
            <div className="movie-container">
                Error
            </div>
        );
    } else {
        if (uploaded) {
            // render state @ data uploaded
            return (
                <div className="movie-container">
                    {
                        data.map(movie =>
                            <LatestMovieItem
                                key={`movie-${movie.id}`}
                                movie={movie} />)
                    }
                </div>
            )
        } else {
            // render state @ data loading
            return (
                <div className="movie-container">
                    Loading...
                </div>
            )
        }
    }
};

export default LatestMovies;