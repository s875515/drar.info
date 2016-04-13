import React from 'react';
import {hashHistory, Router, Route, IndexRoute} from 'react-router';
import Main from '../containers/Main';
import Index from '../components/Index';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Index}/>
    </Route>
  </Router>
);
