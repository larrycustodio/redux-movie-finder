import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePageContainer from './containers/HomePageContainer';
import MovieListPage from './containers/MoviePageContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';
import SiteHeader from './components/SiteHeader';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <SiteHeader />
          <Navbar />
          <Route exact path='/' component={HomePageContainer} />
          <Route exact path='/movies' component={MovieListPage} />
          <Route path='/movies/:id' component={MovieDetailContainer} />
        </div>
      </Router>
    );
  };
};