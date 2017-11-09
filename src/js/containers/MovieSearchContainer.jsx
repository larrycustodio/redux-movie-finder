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
    handleInputChange(e){
        this.setState({
            searchItem: e.target.value
        });
    }
    handleSearchClick(){
        this.props.getMovieSearch(this.state.searchItem);
    }
    render() {
        return (
            <div className='row'>
                <small className='text-muted'>What movie did you have in mind?</small>
                <div className='input-group'>
                    <input type='text' 
                    className='form-control' 
                    placeholder='Search for...'
                    value={ this.state.searchItem }
                    onChange={ this.handleInputChange } />
                    <span className='input-group-btn'>
                        <button className='btn btn-primary'
                            type='button'
                            onClick={ this.handleSearchClick }
                            >Go!</button>
                    </span>
                </div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    movieList: store.movies
}

// Tie in the actions to the component with { connect }
export default connect(mapStoreToProps, { getMovieSearch })(MovieSearchContainer);