import React from 'react';
import { Link } from 'react-router-dom';

import BusinessPageNav from '../biz_header/business_nav_container';
import PageFooter from '../footer/footer';

class BusinessShow extends React.Component {

    componentDidMount () {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    render () {
        const { business } = this.props;

        if (!business) {
            return (
                <div></div>
            )
        } 
        
        return (
            <div>
                <BusinessPageNav />

                {/* <p>{business.id}</p>
                <p>{business.business_name}</p> */}

                <div className="business-show-container">
                    <div className="business-show-container-nav">
                        <div>
                            <label>
                                <i className="fas fa-shopping-basket" /><Link to="/businesses">All Businesses</Link>
                            </label>
                        </div>
                        <div>
                            <label>
                                <i className="fas fa-utensils"/>Restaurans
                            </label>
                        </div>
                        <div>
                            <label>
                            <i className="fab fa-canadian-maple-leaf"/>Parks
                            </label>
                        </div>
                        <div>
                            <label>
                            <i className="fab fa-fort-awesome"/>Castles
                            </label>
                        </div>
                        <div>
                            <label>
                            <i className="fas fa-cookie-bite"/>Cookies
                            </label>
                        </div>
                    </div>
                    <div className="business-show-container-top">
                        <div>
                            <p>{business.business_name}</p>
                        </div>
                        <div>
                            write review
                        </div>
                    </div>
                    <div className="business-show-container-mid">
                        <div>
                            business info
                        </div>
                        <div>
                            business pictures
                        </div>
                    </div>
                    <div className="business-show-container-bottom">
                        <div>
                            reviews
                        </div>
                        <div className="business-show-container-bottom-right">
                            <div>
                                business hours
                            </div>
                            <div>
                                more business info
                            </div>
                        </div>
                    </div>
                </div>

                <PageFooter />
            </div>
        )
    }
}

export default BusinessShow;