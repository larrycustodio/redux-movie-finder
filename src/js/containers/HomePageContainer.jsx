import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrendingMovies from '../components/TrendingMovies';

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
        if(!this.props.trending.uploaded) this.props.getRecentMovies();
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
        const { movies, trending } = this.props;
        const movieTitles = movies.titles.Search;
        return (
            <div className='container'>
                <section className='section'>
                    <h1 className='section-title'>Trending</h1>
                    <TrendingMovies movies={trending} />
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
        trending: store.trending
    }
}

// Tie in the actions to the component with {connect}
const actionCreators = {
    getMovieSearch,
    getRecentMovies,
    getMovieGenres
};

export default connect(mapStoreToProps, actionCreators)(MovieSearchContainer);