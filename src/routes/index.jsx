import React from 'react';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import Main from '../containers/Main';
import Index from '../components/Index';
import Manerge from '../components/Manerge';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Index}/>
      <Route path="/manerge" component={Manerge} />
    </Route>
  </Router>
);
