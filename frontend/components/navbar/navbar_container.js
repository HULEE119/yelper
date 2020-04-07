import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Navigation from './navbar';

const mapStateToProps = ({ entities, session}) => ({
    currentUser: entities.users[session.id],
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);