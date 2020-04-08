import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ currentUser, logout }) => {
    const sessionLinks = () => (
      <div className="nav-header-bar">
        
        <p><Link to="/login">Login</Link></p>
        <p><Link to="/signup">Sign up!</Link></p>
      </div>
    );

    const personalNavigation = () => (
      <div className="nav-header-bar">
        <h2>Hi, {currentUser.first_name}!</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  
    return currentUser ? personalNavigation() : sessionLinks();
};

export default Navigation;