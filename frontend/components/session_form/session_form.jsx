import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.formType === "Sign Up") {
            this.state = {
                first_name: "",
                last_name: "",
                email: "",
                zip_code: "",
                birthday: {},
                password: ""
            };
        } else {
            this.state = {
                email: "",
                password: ""
            };
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.handleClearErrors = this.handleClearErrors.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then( () => this.props.history.push("/") );
    }

    handleUpdate(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.demoLogin({
            email: "yelper@yepler.net", 
            password: "password" })
    }

    handleClearErrors(e) {
        e.preventDefault();
        this.props.clearSessionErrors();
    }

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    render () {
        const days = (["Day"]).concat([...Array(31).keys()].map((ele, idx) => idx +1));
        const years = (["Year"]).concat(([...Array(105).keys()].map((ele, idx) => 2020 - 104 + idx)).reverse());
        const { errors } = this.props;

        const existingUser = () => (
            <div className="existing-user-form-container">
                    <div className="header-bar">
                        <a href="/" id="header-text">Yelper</a>
                    </div>

                <div className={ (this.props.errors.length === 0) ? "" : "errors" }>
                    <ul className={ (this.props.errors.length === 0) ? "" : "signin-errors-list" }>
                    <i onClick={this.handleClearErrors} className={ (this.props.errors.length === 0) ? "" : "fas fa-times" } />
                        { errors.map((error, idx) => (<li key={idx}>{error}.</li>)) }
                    </ul>
                </div>

                <div className="session-form">

                    <div className="signin-wrapper">
                        <p className="signin-notification">Log In to Yelper</p>
                        <p className="new-signup-notification">New To Yelper? <span className="new-signup-link"><Link to="/signup">Sign up!</Link></span></p>
                        <p className="legal-copy">By logging in, you will be logged in.</p>
                        <div className="signin-form">
                            <input type="email" onChange={this.handleUpdate('email')} placeholder="Email" />
                            <input type="password" onChange={this.handleUpdate('password')} placeholder="Password" />
                            <button className="btn-session-login" onClick={this.handleSubmit}>{this.props.formType}</button>
                            <button className="btn-session-demouser" onClick={this.demoLogin}>Demo Account</button>
                        </div>
                        <p className="bottom-new-signup-notification">New To Yelper? <span className="new-signup-link"><Link to="/signup">Sign up!</Link></span></p>
                    </div>

                    <div className="session-form-image">
                        <img src={window.signupIllustration} className="session-form-image-content" alt="signup-illustration"/>
                    </div>

                </div>

            </div>
        );

        const newUser = () => (
            <div className="new-user-form-container">
                    <div className="header-bar">
                        <a href="/" id="header-text">Yelper</a>
                    </div>

                <div className={ (this.props.errors.length === 0) ? "" : "errors" }>
                    <ul className={ (this.props.errors.length === 0) ? "" : "signup-errors-list" }>
                    <i onClick={this.handleClearErrors} className={ (this.props.errors.length === 0) ? "" : "fas fa-times" } />
                        { errors.map((error, idx) => (<li key={idx}>{error}.</li>)) }
                    </ul>
                </div>

                <div className="session-form">
                    <div className="signup-wrapper">
                        <p className="signup-form-header">Sign Up For Yelper</p>
                        <p className="signup-notification">Connect with great local businesses</p>
                        <p className="legal-copy">By continuing, you will be signed up.</p>

                        <form>
                            <div className="signup-box">
                                <div className="signup-fullname-box">
                                    <input className="signup-first-name" type="text" onChange={this.handleUpdate('first_name')} placeholder="First Name"/>
                                    <input className="signup-last-name" type="text" onChange={this.handleUpdate('last_name')} placeholder="Last Name"/>
                                </div>
                                <input type="email" onChange={this.handleUpdate('email')} placeholder="Email" />
                                <input type="password" onChange={this.handleUpdate('password')} placeholder="Password" />
                                <input type="text" onChange={this.handleUpdate('zip_code')} placeholder="ZIP Code" />
                                <p className="signup-birthday-subheader">Birthday</p>
                            </div>

                            <div className="signup-birthday-box">
                                <ul>
                                    <li className="signup-birthday-month">
                                        <select>
                                            <option value="Month">Month</option>
                                            <option value="Jan">Jan</option>
                                            <option value="Feb">Feb</option>
                                            <option value="Mar">Mar</option>
                                            <option value="Apr">Apr</option>
                                            <option value="May">May</option>
                                            <option value="Jun">Jun</option>
                                            <option value="Jul">Jul</option>
                                            <option value="Aug">Aug</option>
                                            <option value="Sep">Sep</option>
                                            <option value="Oct">Oct</option>
                                            <option value="Nov">Nov</option>
                                            <option value="Dec">Dec</option>
                                        </select>
                                    </li>
                                    <li className="signup-birthday-day">
                                        <select>
                                            { days.map((day, idx) => <option key={day} value={day}>{day}</option>) }
                                        </select>
                                    </li>
                                    <li className="signup-birthday-year">
                                        <select>
                                            { years.map((year, idx) => <option key={year} value={year}>{year}</option>) }
                                        </select>
                                    </li>
                                </ul>
                            </div>

                            <div className="signup-form-btns">
                                <button className="btn-submit-signup" onClick={this.handleSubmit}>{this.props.formType}</button>
                                <button className="btn-submit-demosignup" onClick={this.demoLogin}>Demo Account</button>
                            </div>
                            
                            <p className="bottom-signin-notification">Already a user? <span className="backto-login-link"><Link to="/login">Log In</Link></span></p>
                        </form>


                    </div>
                        <div className="session-form-image">
                            <img src={window.signupIllustration} className="session-form-image-content" alt="signup-illustration"/>
                        </div>
                </div>
            </div>
        )

        return (this.props.formType === "Sign Up") ? newUser() : existingUser() 

    }
};

export default SessionForm;