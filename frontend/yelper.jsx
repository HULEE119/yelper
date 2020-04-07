import React from 'react';
import ReactDOM from 'react-dom';

import { signup, login, logout } from './util/session_api_util'


document.addEventListener('DOMContentLoaded', () => {

    //TESTING
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    //TESTING

    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Yelper</h1>, root);
});
