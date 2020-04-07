import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import { createNewUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors,
    formType: 'Sign Up',
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (formUser) => dispatch(createNewUser(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);