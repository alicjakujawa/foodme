import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App';
import './styles/main.sass';

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={App} />
    </Route>
  </Router>
);
