import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import ErrorPage from './error_page/error_page'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import './assets/stylesheet/reset.css'

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/errors" component={ErrorPage} /> 
            <Route path='/' component={NavBarContainer} />
        </Switch>

        <Switch>
            <Route exact path="/" component={MainPage} />
            <Redirect to='/errors' />
        </Switch>
    </div>
);

export default App;