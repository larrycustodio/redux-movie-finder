import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div className='jumbotron m-1'>
            <div className='container'>
              <a href='#'><h1 className='display-3'>Movie Finder</h1></a>
              <p className='lead'>Movie movie movie yay!</p>
            </div>
          </div>
          <Route exact path='/' component={MovieSearchContainer} />
          <Route path='/movie/:id' component={MovieDetailContainer} />
        </div>
      </Router>
    );
  }
}
