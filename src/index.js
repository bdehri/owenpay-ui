import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';


import './index.css';
import Main from './Containers/main';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route path="/" component={Main} />
    </Switch>
  </HashRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
