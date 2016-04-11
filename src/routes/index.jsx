import React from 'react';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import App from '../components/App';
import Index from '../components/Index';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
    </Route>
  </Router>
);
