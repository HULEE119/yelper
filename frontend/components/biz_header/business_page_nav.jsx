import React from 'react';
import { Link } from 'react-router-dom'; 

const BusinessPageNav = ({ currentUser, logout }) => {
    const userLoggedIn = () => (
        <div className="biz-page-header-container">
            <div className="biz-page-header-logo">
                <p id="biz-nav-text">
                    <Link to="/">
                        Yelper
                    </Link>
                </p>
            </div>

            <div className="biz-page-header-searchbar">
                    <label className="biz-page-header-searchbar-find">
                        Find
                        <input type="text" placeholder="cookies..."/>
                    </label>
                    
                    <label className="biz-page-header-searchbar-near">
                        Near
                        <input type="text" placeholder="Queens, NY"/>
                    </label>

                    <label className="biz-page-header-searchbar-search">
                        <i className="fas fa-search" />
                    </label>
                </div>

            <div className="biz-page-header-user">
                <span className="biz-page-header-user-loggedin-link"><i className="far fa-user" /> {currentUser.first_name}!</span>
                <span className="biz-page-header-user-logout-link" onClick={logout}>Log Out</span>
            </div>

        </div>

    );

    const userNotLoggedIn = () => (
        <div className="biz-page-header-container">
            <div className="biz-page-header-logo">
                <p id="biz-nav-text">
                    <Link to="/">
                        Yelper
                    </Link>
                </p>
            </div>

            <div className="biz-page-header-searchbar">
                <label className="biz-page-header-searchbar-find">
                    Find
                    <input type="text" placeholder="cookies..."/>
                </label>
                
                <label className="biz-page-header-searchbar-near">
                    Near
                    <input type="text" placeholder="Queens, NY"/>
                </label>

                <label className="biz-page-header-searchbar-search">
                    <i className="fas fa-search" />
                </label>
            </div>

            <div className="biz-page-header-user">
                <span className="biz-page-header-user-login-link"><Link to="/login">Log In</Link></span>
                <span className="biz-page-header-user-signup-link"><Link to="/signup">Sign Up</Link></span>
            </div>

        </div>
    )

    return currentUser ? userLoggedIn() : userNotLoggedIn();

}

export default BusinessPageNav;