import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeView from '../views/HomeView';
import SignupView from '../views/SignupView';

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/signup" component={SignupView} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes
