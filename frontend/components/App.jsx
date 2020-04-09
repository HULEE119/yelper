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
        <header>
            <Route exact path="/" component={NavigationContainer} />
        </header>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        {/* <Route exact path="/businesses/:businessId" component={BusinessShowContainer} /> */}
    </div>
);

export default App;