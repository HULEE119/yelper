import React from 'react';
import { Link } from 'react-router-dom'; 

const BusinessPageHeader = () => (
    <div className="biz-page-header-container">
        <div className="biz-page-header-logo">
            <p id="header-text"><Link to="/">Yelper</Link></p>
        </div>

        <div className="biz-page-header-searchbar">
            <p>Find<input type="text"/></p>
            
            <p>Near<input type="text"/></p>
            <p><i className="fas fa-search" /></p>
        </div>

        <div className="biz-page-header-user">
            <span className="biz-page-header-user-login-link"><Link to="/login">Log In</Link></span>
            <span className="biz-page-header-user-signup-link"><Link to="/signup">Sign Up</Link></span>
        </div>

    </div>
);

export default BusinessPageHeader;