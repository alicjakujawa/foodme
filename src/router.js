import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';
import MainHeader from './components/MainHeader';
import './styles/main.sass';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="home" components={{ main: MainPage, header: MainHeader }} />
      <Route path="search" components={{ main: SearchPage, header: MainHeader }} />
    </Route>
  </Router>
);
