import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import { createNewUser, login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'Sign Up',
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (formUser) => dispatch(createNewUser(formUser)),
    demoLogin: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);