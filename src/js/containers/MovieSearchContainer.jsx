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
                    <small className='text-muted'>What movie did you have in mind?</small>
                    <div className='input-group'>
                        <input type='text'
                            className='form-control'
                            placeholder='Search for...'
                            value={this.state.searchItem}
                            onChange={this.handleInputChange} />
                        <span className='input-group-btn'>
                            <button className='btn btn-primary'
                                type='button'
                                onClick={this.handleSearchClick}
                            >Go!</button>
                        </span>
                    </div>
                </div>
                <div className='row'>
                    {   movieTitles &&
                        movieTitles.length &&
                        movieTitles.map((movie, index) => {
                            return (
                                <div
                                    key={index}
                                    className='card m-1 col-md-3 col-lg-6'>
                                    <h4 className='card-title'>{movie.Title}</h4>
                                    <small className='text-muted'>{movie.Year}</small>
                                    <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed tortor sapien, elementum sed ullamcorper quis, vehicula sed ex.
                                        Nullam sed risus vulputate, maximus lectus et, tincidunt est.
                                        Mauris vitae iaculis ante. Donec quis dolor vel diam imperdiet
                                        pharetra ut et massa.
                                    </p>
                                    <a href={'#/movie/' + movie.imdbID} className="btn btn-info">More information</a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStoreToProps = ({ movies }) => ({
    movies
});

// Tie in the actions to the component with { connect }
export default connect(mapStoreToProps, { getMovieSearch })(MovieSearchContainer);