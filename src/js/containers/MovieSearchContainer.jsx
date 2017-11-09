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
                    <div className='input-field cold s2'>
                        <a className='btn waves-effect waves-light'
                            onClick={this.handleSearchClick}>
                            Go!
                    </a>
                    </div>
                </div>
                <div className='row'>
                    {movieTitles &&
                        movieTitles.length &&
                        movieTitles.map((movie, index) => {
                            return (
                                <div key={index}
                                    className='col s12 m3'>
                                    <a href={'#/movie/' + movie.imdbID}>
                                        <div className='card'>
                                            <div className='card-image'>
                                                <img src={movie.Poster} alt='movie poster' />
                                            </div>
                                            <div className='card-content'>
                                                <span className='card-title'>{movie.Title}</span>
                                                <p className='movie-list-year'>{movie.Year}</p>
                                            </div>
                                        </div>
                                    </a>
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