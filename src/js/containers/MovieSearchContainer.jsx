import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieSearch } from '../actions/movieActions';

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
    handleSearchClick() {
        this.props.getMovieSearch(this.state.searchItem);
    }
    render() {
        const movieTitles = this.props.movies.titles.Search;
        return (
            <div className='container'>
                <div className='row'>
                    <div className='input-field col s10'>
                        <input id='search'
                            type='text'
                            className='validate'
                            value={this.state.searchItem}
                            onChange={this.handleInputChange} />
                        <label htmlFor='search'>Search movies</label>
                    </div>
                    <a className='col s2 waves-effect waves-light btn'
                        onClick={this.handleSearchClick}>
                        Go!
                    </a>
                </div>
                <div className='row'>
                    {movieTitles &&
                        movieTitles.length &&
                        movieTitles.map((movie, index) => {
                            return (
                                <a href={'#/movie/' + movie.imdbID}>
                                    <div key={index}
                                        className='col s12 m6 l4 xl3 center-align'>
                                        <h6 className='movie-list-year'>{movie.Year}</h6>
                                        <img className='movie-list-poster' src={movie.Poster} alt='movie poster' />
                                        <h4 className='movie-list-title'>{movie.Title}</h4>
                                    </div>
                                </a>
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