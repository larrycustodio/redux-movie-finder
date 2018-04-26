import React, { Component } from 'react';
import {
    Link,
    NavLink
} from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import LatestMovies from '../components/LatestMovies';

import {
    getMovieSearch,
    getRecentMovies,
    getMovieGenres
} from '../actions/movieActions';

const MovieSearchResults = props => {
    const { movieTitles } = props;
    return (
        <div className='row'>
            {movieTitles &&
                movieTitles.length &&
                movieTitles.map((movie, index) => {
                    return (
                        <div key={index}
                            className='col s12 m6 lg4 search-result'>
                            <Link to={`/movie/${movie.imdbID}`}>
                                <div className='card'>
                                    <div className='card-image'>
                                        {movie.Poster == 'N/A' ?
                                            <div className='card-no-img' />
                                            :
                                            <img src={movie.Poster} alt='movie poster' />
                                        }
                                    </div>
                                    <div className='card-content'>
                                        <span className='card-title'>{movie.Title}</span>
                                        <p className='movie-list-year'>{movie.Year}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    );
};

class MovieSearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItem: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }
    componentDidMount() {
        this.props.getMovieGenres();
        this.props.getRecentMovies();
    }
    handleInputChange(e) {
        this.setState({
            searchItem: e.target.value
        });
    }
    handleSearchClick(e) {
        e.preventDefault();
        this.props.getMovieSearch(this.state.searchItem);
    }
    render() {
        const { movies, latest } = this.props;
        const movieTitles = movies.titles.Search;
        return (
            <div className='container'>
                <Navbar />
                <section className='section'>
                    <h1 className='section-title'>In theaters</h1>
                    <LatestMovies movies={latest} />
                </section>
                <MovieSearchResults
                    movieTitles={movieTitles}
                />
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        movies: store.titles,
        latest: store.latest
    }
}

// Tie in the actions to the component with {connect}
const actionCreators = {
    getMovieSearch,
    getRecentMovies,
    getMovieGenres
};

export default connect(mapStoreToProps, actionCreators)(MovieSearchContainer);