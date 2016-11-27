import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Master from './components/Master.js';
import Splash from './components/Splash.js';
import Dashboard from './components/Dashboard.js';
import NavBar from './components/NavigationBar.js';
import Account from './components/Account.js';
import Itinerary from './components/Itinerary.js';
import HotelItin from './components/HotelItin.js';
import FlightItin from './components/FlightItin.js';
import CarItin from './components/CarItin.js';
import ActivityItin from './components/ActivityItin.js';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Master}>
        <IndexRoute component={Splash} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="account" component={Dashboard} />
        <Route path="account" component={Splash} />
        <Route path="logout" component={Splash} />
        <Route path="dashboard" component={Itinerary} />
        <Route path="dashboard" component={HotelItin} />
        <Route path="dashboard" component={FlightItin} />
        <Route path="dashboard" component={CarItin} />
        <Route path="dashboard" component={ActivityItin} />
        <Route path="*" component={Master} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));