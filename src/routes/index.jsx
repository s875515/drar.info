import React from 'react';
import {hashHistory, Router, Route, IndexRoute} from 'react-router';
import Main from '../containers/Main';
import Index from '../components/Index';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Index}/>
      <Route path="page1" component={Page1} />
      <Route path="page2" component={Page2} />
    </Route>
  </Router>
);
