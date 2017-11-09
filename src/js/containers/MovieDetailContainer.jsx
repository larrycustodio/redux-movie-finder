import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieDetails } from '../actions/movieActions';

class MovieDetailContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.getMovieDetails(this.props.match.params.id);
    }
    render() {
        const movieData = this.props.movie;
        console.log(movieData);
        if(!movieData.Response){
            return (
                <div className='loading'>
                </div>
            )
        } else {
            return (
                <div className='container'>
                    <div className='movie-header'>
                        <h1 className='display-2'>{ movieData.Title }</h1>
                        <div className='display-3'>{ movieData.Year }</div>
                        <span className=''>{ movieData.Rated }</span> | <span className=''>{ movieData.Runtime }</span> |
                        {
                            movieData.Ratings.map(rating=>{
                                return (
                                    <span key={ rating.Source.toLowerCase().replace(/( )/g,'-') }
                                    className=''>
                                         &nbsp;{ rating.Value }&nbsp;|
                                    </span>
                                );
                            })
                        }
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='img-fluid' src={ movieData.Poster } />
                        </div>
                        <div className='col-md-8'>{ movieData.Plot }</div>
                    </div>
                </div>
            );    
        }
    }
}

const mapStoreToProps = (store) => {
    return {
        movie: store.movie
    }
}

// Tie in the actions to the component with { connect }
export default connect(mapStoreToProps, { getMovieDetails })(MovieDetailContainer);