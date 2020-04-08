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

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    render () {
        const days = (["Day"]).concat([...Array(31).keys()].map((ele, idx) => idx +1));
        const years = (["Year"]).concat(([...Array(105).keys()].map((ele, idx) => 2020 - 104 + idx)).reverse());
        const { errors } = this.props;

        const existingUser = () => (
            <div className="session-form">
                <div className="signup-wrapper">
                    <ul className="errors">
                        { errors.map((error, idx) => (<li key={idx}>{error}</li>)) }
                    </ul>

                    <h2>Log In to Yelper!!</h2>
                    <div><h3>New To Yelper?</h3><Link to="/signup">Sign up!</Link></div>
                    <p>By logging in, you agree to have fun.</p>
                    <div>
                        <input type="email" onChange={this.handleUpdate('email')} placeholder="Email" />
                        <input type="password" onChange={this.handleUpdate('password')} placeholder="Password" />
                        <button onClick={this.handleSubmit}>{this.props.formType}</button>
                        <button onClick={this.demoLogin}>Demo Account</button>
                    </div>
                </div>
            </div>
        );

        const newUser = () => (
            <div className="session-form">
                <div className="signup-wrapper">
                    <ul className="errors">
                        { errors.map((error, idx) => (<li key={idx}>{error}</li>)) }
                    </ul>
                    <div>
                        <h2>Sign Up For Yelper!!</h2>
                        <h4>Connect with great local businesses!!!</h4>
                    </div>
                    <form>
                        <div className="signup-box">
                            <input type="text" onChange={this.handleUpdate('first_name')} placeholder="First Name"/>
                            <input type="text" onChange={this.handleUpdate('last_name')} placeholder="Last Name"/>
                            <input type="email" onChange={this.handleUpdate('email')} placeholder="Email"/>
                            <input type="password" onChange={this.handleUpdate('password')} placeholder="Password"/>
                            <input type="text" onChange={this.handleUpdate('zip_code')} placeholder="ZIP Code"/>
                        </div>
                        <div>
                            <h3>Birthday Optional</h3>
                            <select name="sign-up birthday-month">
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
                            <select name="sign-up birthday-day">
                                { days.map((day, idx) => <option key={day} value={day}>{day}</option>) }
                            </select>
                            <select name="sign-up birthday-year">
                                { years.map((year, idx) => <option key={year} value={year}>{year}</option>) }
                            </select>

                        </div>
                        <button onClick={this.handleSubmit}>{this.props.formType}</button>
                        <button onClick={this.demoLogin}>Demo Account</button>
                        <div><h3>Already a user?</h3><Link to="/login">Log In</Link></div>
                    </form>
                </div>
            </div>
        )

        return (this.props.formType === "Sign Up") ? newUser() : existingUser() 
    }
};

export default SessionForm;