import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePageContainer from './containers/HomePageContainer';
import MovieListPage from './containers/MoviePageContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';
import SiteHeader from './components/SiteHeader';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <SiteHeader />
          <Route exact path='/' component={HomePageContainer} />
          <Route exact path='/movie' component={MovieListPage} />
          <Route path='/movie/:id' component={MovieDetailContainer} />
        </div>
      </Router>
    );
  }
}
