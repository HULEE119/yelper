import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { searchBusinesses, fetchAllBusinesses } from '../../actions/business_actions';

import BusinessPageNav from './business_page_nav';

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.id],
    businesses: Object.values(entities.businesses)
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    searchBusinesses: (query) => dispatch(searchBusinesses(query)),
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessPageNav);