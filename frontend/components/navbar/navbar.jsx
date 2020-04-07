import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ currentUser, logout }) => {
    const sessionLinks = () => (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up!</Link>
      </div>
    );

    const personalNavigation = () => (
      <div>
        <h2>Hi, {currentUser.first_name}!</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  
    return currentUser ? personalNavigation() : sessionLinks();
};

export default Navigation;