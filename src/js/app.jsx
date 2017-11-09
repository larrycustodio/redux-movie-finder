import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='section'>
          <div className='container'>
              <h1 className='header center'>Movie Finder</h1>
              <p className='caption'>Got a movie in mind? Perhaps searching it can help!</p>
          </div>
          <Route exact path='/' component={MovieSearchContainer} />
          <Route path='/movie/:id' component={MovieDetailContainer} />
        </div>
      </Router>
    );
  }
}
