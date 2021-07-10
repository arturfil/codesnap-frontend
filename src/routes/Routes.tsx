import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomeView from '../views/HomeView';
import SignupView from '../views/SignupView';

const Routes = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/signup" component={SignupView} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routes
