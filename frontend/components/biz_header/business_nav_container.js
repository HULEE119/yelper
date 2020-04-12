import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import BusinessPageNav from './business_page_nav';

const mapStateToProps = ({ entities, session}) => {
    return (
        {currentUser: entities.users[session.id]}
    )  
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(BusinessPageNav);