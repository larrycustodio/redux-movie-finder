import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieSearch } from '../actions/movieActions';
import { Link } from 'react-router-dom';

class MovieSearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItem: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
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
        const movieTitles = this.props.movies.titles.Search;
        return (
            <div className='container'>
                <div className='row'>
                    <div className='card'>
                        <form onSubmit={this.handleSearchClick}>
                            <div className='input-field'>
                                <input id='search'
                                    type='search'
                                    placeholder='Search movies'
                                    value={this.state.searchItem}
                                    onChange={this.handleInputChange}
                                    required />
                            </div>
                        </form>
                    </div>
                </div>
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
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        movies: store.titles
    }
}

// Tie in the actions to the component with { connect }
export default connect(mapStoreToProps, { getMovieSearch })(MovieSearchContainer);