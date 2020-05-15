import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import './assets/css/style.css'; //Global Stylesheet
import "bootstrap/dist/css/bootstrap.css";
import App from './App';//remove after setup

import Presentation from './views/pages/presentation'
import Landing from './views/pages/landing'
import Team from './views/pages/team'
import Contact from './views/pages/contact'
import Layout from './layouts/layout'
import * as serviceWorker from './serviceWorker';

import routes from "./routes.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" render={props => <Layout {...props} />} />
      {/* <Route path="/" render={props => <Landing {...props}/>} />
      <Route path="/team" render={props => <Team {...props}/>} />
      <Route path="/app" render={props => <App {...props}/>} />
      <Route path="/presentation" render={props => <Presentation {...props}/>} />
      <Route path="/contact" render={props => <Contact {...props}/>} /> */}
      <Redirect to="/" />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
