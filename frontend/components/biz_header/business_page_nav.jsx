import React from 'react';
import { Link } from 'react-router-dom'; 

class BusinessPageNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: "" }

        // this.handleSubmit = this.handleSubmit(this);
    }

    // componentDidMount() {
    //     this.props.fetchAllBusinesses();
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     if ( this.state.query ) {
    //         this.props.history.push(`/search/${this.state.query}`);
    //     } else {
    //         this.props.history.push(`/businesses`);
    //     }
    // }

    // update(field) {
    //     return (e) => {
    //         this.setState({ [field]: e.target.value })
    //     }
    // }


    render () {
        const { currentUser, logout} = this.props;

        return (
            <div className="biz-page-header-container">

                <div className="biz-page-header-container-box">
                    <div className="biz-page-header-logo">
                        <p id="biz-nav-text">
                            <Link to="/">
                                Yelper
                            </Link>
                        </p>
                    </div>


                    { ( currentUser) ? (
                        <div className="biz-page-header-user">
                            <span className="biz-page-header-user-loggedin-link">Hi, {currentUser.first_name}!</span>
                            <span className="biz-page-header-user-logout-link" onClick={logout}>Log Out</span>
                        </div>
                    ) : (
                        <div className="biz-page-header-user">
                            <span className="biz-page-header-user-login-link"><Link to="/login">Log In</Link></span>
                            <span className="biz-page-header-user-signup-link"><Link to="/signup">Sign Up</Link></span>
                        </div>

                    )}
                </div>

            </div>
        )
    }
}

export default BusinessPageNav;


// <form className="biz-page-header-searchbar">
//     <label className="biz-page-header-searchbar-find">
//         <input type="text" 
//         onChange={this.update('query')}
//         value={this.state.query} 
//         placeholder="bagel, thai..." 
//         />
//     </label>

//     <label className="biz-page-header-searchbar-search" onCLick={this.handleSubmit} >
//         <i className="fas fa-search"/>
//     </label>
// </form> 