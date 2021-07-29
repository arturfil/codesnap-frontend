import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CreatePostView from '../views/CreatePostView';
import EditPostView from '../views/EditPostView';
import HomeView from '../views/HomeView';
import PostDetailView from '../views/PostDetailView';
import SignupView from '../views/SignupView';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/signup" component={SignupView} />
          <Route exact path="/createPost" component={CreatePostView} />
          <Route exact path="/editPost/:id" component={EditPostView} />
          <Route exact path="/posts/:id" component={PostDetailView} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routes
