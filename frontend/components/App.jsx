import React from "react";
import { Route } from 'react-router-dom';

import AuthRoute from '../util/route_util';

import NavigationContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessShowContainer from './business/business_show_container';
import PageFooter from './footer/footer';


const App = () => (
    <div id="page-container">
        <div id="content-wrap">
            <Route exact path="/" component={NavigationContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route exact path="/businesses" component={BusinessIndexContainer} />
            <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
        </div>

        <footer>
            <Route exact path="/" component={PageFooter} />
        </footer>
    </div>
);

export default App;