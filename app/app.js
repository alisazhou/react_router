import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Home from 'ui/home';
import Users from 'ui/users';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/users" component={Users} />
  </Router>
), document.getElementById('root'));
