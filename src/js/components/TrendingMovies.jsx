import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { setImgAlt, setImgURL } from '../helpers';

/**
 * Single movie item component at "in theaters" component
 * @param {Object} movie metadata 
 */
const TrendingMovieItem = props => {
    const { movie } = props;
    const mouseOverHandler = ({ target }) => {
        if (target.nodeName == 'IMG') {
            target.parentNode.classList.add('active');
        }
    };
    const mouseOutHandler = ({ target }) => {
        if (target.nodeName == 'IMG') {
            target.parentNode.classList.remove('active');
        }
    };
    return (
        <Link
            to={`/movies/${movie.id}`}
            className="movie-item trending-movie"
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
        >
            <div className="poster-container">
                <img className="poster-img" src={setImgURL(movie.poster_path)} alt={setImgAlt(movie.title)} />
            </div>
        </Link>
    );
}
/**
 * Container for "trending" front page component
 * @param {Object} trending movie store props 
 */
const TrendingMovies = props => {
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
                        [...data.slice(0, 10)].map(movie =>
                            <TrendingMovieItem
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

export default TrendingMovies;