import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Star } from '../icons';
import {
    getMovieDetails,
    setMovieDetails
} from '../actions/movieActions';

import {
    setImgAlt,
    setImgURL
} from '../helpers';

class MovieDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { getMovieDetails, setMovieDetails, trending, titles, match } = this.props;
        // Perform search on trending, pass to details state if it exists
        const isTrendingMovie = trending.data.filter(movie => movie.id == match.params.id);
        if (isTrendingMovie.length) {
            setMovieDetails(isTrendingMovie[0]);
        } else {
            // Perform an API request if the details is not in store
        }
    }
    render() {
        const { uploaded } = this.props.movie;
        if (uploaded) {
            // Render state with data uploaded
            const { movie } = this.props;
            return (
                <section className="container movie-details">
                    <div className="backdrop"
                        data-src-path={setImgURL(movie.backdrop_path, 780)} />
                    <div className="content">
                        <header className="header">
                            <h1 className="title">{movie.original_title}</h1>
                            <div className="meta">
                                <div className="rating">
                                    {movie.vote_average} /10
                                </div>
                                <div className="rating-icon">
                                    {Star()}
                                </div>
                                <div className="genre">
                                    {movie.genre_ids.map(id => <span key={id}>{id}</span>)}
                                </div>
                            </div>
                        </header>
                        <article className="overview">
                            <p>{movie.overview}</p>
                        </article>
                    </div>
                    <div className="poster">
                        <img
                            className="poster-img"
                            src={setImgURL(movie.poster_path, 342)}
                            alt={setImgAlt(movie.title)} />
                    </div>
                </section>
            );
        } else {
            // Render state with data loading
            return (
                <section className="container">
                    Loading movie details...
                </section>
            );
        };
    }
}

const mapStoreToProps = (store) => {
    return {
        movie: store.movie,
        trending: store.trending
    }
}

const actionCreators = {
    getMovieDetails,
    setMovieDetails
}
export default connect(mapStoreToProps, actionCreators)(MovieDetailContainer);