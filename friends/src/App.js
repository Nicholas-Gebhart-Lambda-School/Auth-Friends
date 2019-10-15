import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';

import FriendsDashboard from './components/private/FriendsDashboard';
import Navigation from './components/navigation/Navigation';
import LandingPage from './components/landing/LandingPage';
import LoginForm from './components/forms/LoginForm';

const App = () => (
  <>
    <Navigation />
    <Switch>
      <PrivateRoute path="/protected" component={FriendsDashboard} />
      <Route path="/login" component={LoginForm} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </>
);
export default App;
