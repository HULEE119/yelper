import React from 'react';
import { Link } from 'react-router-dom';

import HomepageBusinessDisplay from './homepage_business_display';

class HomepageNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: "" }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        this.props.fetchAllBusinesses();
    }

    handleSubmit(e) {
        e.preventDefault();
        if ( this.state.query ) {
            this.props.history.push(`/search/${this.state.query}`);
        } else {
            this.props.history.push(`/businesses`);
        }
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render () {
        const { currentUser, logout, businesses, searchBusinesses } = this.props;

        return (
            <div className="nav-header-homepage">
                <div className="nav-header-homepage-content">

                    <div className="header-btns">
                        <div className="header-btns-left">
                            <p className="btn-write-a-review"><Link to="/businesses">View All Businesses</Link></p>
                            <p className="btn-events"><a href="https://www.linkedin.com/in/mengyuanhu/" target="_blank">LinkedIn</a></p>
                            <p className="btn-talk"><a href="https://github.com/HULEE119" target="_blank">GitHub</a></p>
                        </div>
            
                        { (currentUser) ? (
                            <div className="header-btns-right">
                                <p className="btn-login" ><Link to="/businesses"><i className="far fa-user" /> {currentUser.first_name}</Link></p>
                                <p className="btn-signup" onClick={logout}>Log Out</p>
                            </div>
                        ) : (
                            <div className="header-btns-right">
                                <p className="btn-login" ><Link to="/login">Log In</Link></p>
                                <p className="btn-signup" ><Link to="/signup">Sign Up</Link></p>
                            </div>
                        )} 

                    </div>
            
                    <div className="header-main">
                        <div className="header-logo">
                            <Link to="/">Yelper</Link>
                        </div>
            
                        <form className="header-search-box">
                            <label className="search-bar-find">Find
                                <input type="text" 
                                    onChange={this.update('query')}
                                    value={this.state.query} 
                                    placeholder="bagel, thai..." 
                                />
                            </label>
                
                            <label className="search-bar-search" 
                                onClick={this.handleSubmit} >
                                <i className="fas fa-search"/>
                            </label>
                        </form>
            
                        <div className="header-nav">
                            <ul className="header-links">
                                <li className="header-accountants"><i className="fas fa-home"></i><a href="https://hulee119.github.io/" target="_blank">Portfolio</a></li>
                                <li className="header-home-services"><i className="fab fa-linkedin-in"></i><a href="https://www.linkedin.com/in/mengyuanhu/" target="_blank">LinkedIn</a></li>
                                <li className="header-restaurants"><i className="fab fa-github"></i><a href="https://github.com/HULEE119" target="_blank">GitHub</a></li>
                                <li className="header-delivery"><i className="fab fa-angellist"></i><a href="https://angel.co/u/christina-hu-lee" target="_blank">AngelList</a></li>
                            </ul>
                        </div>
                    </div>
        
                </div>
        
                <div className="homepage-business-display">
        
                    <div className="homepage-business-display-header">

                        <div className="homepage-business-display-topheader">
                            Yelper New York
                        </div>

                        <div className="homepage-business-display-subheader">
                            <div>Queens</div>
                            <div>Manhattan</div>
                            <div>Brooklyn</div>
                            <div>Bronx</div>
                            <div><Link to="/businesses">All Businesses</Link></div>
                        </div>

                    </div>
            
                    <div className="homepage-business-individual-display">
                        {businesses.slice(0, 3).map((business, index) => {
                            return (
                                <HomepageBusinessDisplay 
                                    business={business}
                                    key={index}
                                />
                            )
                        } 

                        )}

                        {/* <HomepageBusinessDisplay />

                        <HomepageBusinessDisplay />  */}
                    </div>
        
                </div>
            </div>
        )
    }
}

export default HomepageNav;