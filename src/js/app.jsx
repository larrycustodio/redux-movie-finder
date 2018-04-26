import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Navbar />
          <Route exact path='/' component={MovieSearchContainer} />
          <Route path='/movie/:id' component={MovieDetailContainer} />
        </div>
      </Router>
    );
  }
}
