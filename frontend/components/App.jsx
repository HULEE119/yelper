import React from "react";
import NavigationContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route } from 'react-router-dom';
import AuthRoute from '../util/route_util';

const App = () => (
    <div>
        <header>
            <div className="header-bar">
                <p className="header-text">yelper</p>
            </div>

            <Route exact path="/" component={NavigationContainer} />
        </header>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;