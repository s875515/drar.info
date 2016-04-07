import React from 'react';
import {Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import Index from '../components/Index';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="page1" component={Page1} />
      <Route path="page2" component={Page2} />
    </Route>
  </Router>
);
