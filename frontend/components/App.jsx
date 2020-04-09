import React from "react";
import { Route } from 'react-router-dom';

import AuthRoute from '../util/route_util';

import NavigationContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PageFooter from './footer/footer';

const App = () => (
    <div>
        {/* <PageFooter /> */}
        <Route exact path="/" component={NavigationContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;