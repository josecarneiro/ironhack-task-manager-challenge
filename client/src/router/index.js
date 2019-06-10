import React from "react";
import { Route, Switch } from 'react-router'

import TasksView from 'views/Task/List';
import TaskCreateView from 'views/Task/Create';
import TaskEditView from 'views/Task/Edit';
import TaskDisplayView from 'views/Task/Display';
import AuthenticationSignUpView from 'views/Authentication/SignUp';
import AuthenticationSignInView from 'views/Authentication/SignIn';

export default () => (
  <Switch>
    <Route path="/authentication/sign-up" component={ AuthenticationSignUpView }/>
    <Route path="/authentication/sign-in" component={ AuthenticationSignInView }/>
    <Route path="/task/add" component={ TaskCreateView }/>
    <Route path="/task/:id/edit" component={ TaskEditView }/>
    <Route path="/task/:id" component={ TaskDisplayView }/>
    <Route path="/" component={ TasksView }/>
  </Switch>
);
