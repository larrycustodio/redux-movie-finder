import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getMovieDetails,
    setMovieDetails
} from '../actions/movieActions';

class MovieDetailContainer extends Component {
    constructor(props){
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
                <section className="container">
                    <header className="movie-header">
                        <h1>{movie.title}</h1>
                    </header>
                    <article className="movie-overview">
                        <p>{movie.overview}</p>
                    </article>
                </section>
            );
        } else {
            // Render state with data loading
            return (
                <section className="container">
                Loading loading...
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