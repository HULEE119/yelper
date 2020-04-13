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
                <div className="business-show-container-nav">
                    <div>
                        <label>
                            <i className="fas fa-shopping-basket" /><Link to="/businesses">All Businesses</Link>
                        </label>
                    </div>
                    <div>
                        <label>
                            <i className="fas fa-utensils"/>Restaurants
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
                <div className="business-show-images">
                    <div className="business-show-images-1"></div>
                    <div className="business-show-images-2"></div>
                    <div className="business-show-images-3"></div>
                    <div className="business-show-images-4"></div>
                </div>

                <div className="business-show-container">
                    <div className="business-show-container-top">
                        <div className="business-show-container-top-bizinfo">
                            <p>{business.business_name}</p>
                            <p className="business-show-container-top-bizinfo-rating">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star-half-alt"/>
                            </p>
                            <p>Bakeries, Breakfast, Brunch, Sandwiches</p>
                            <span className="business-show-container-top-writeareview">
                                <i className="fas fa-star"/> Write a Review
                            </span>
                        </div>
                    </div>
                    <div className="covid-19">
                        <p>COVID-19 Advisory: <span className="covid-19-biz">Business operations may be affected</span></p> 
                        <p>Due to ongoing precautionary measures, please contact the business directly for updated hours and availability.</p>
                    </div>
                    <div className="business-show-container-top-bizcontactinfo">
                        <div id="bizcontactinfo"><i className="fas fa-sign-out-alt"/><Link to={`${business.business_site}`}> {business.business_site} </Link></div>
                        <div id="bizcontactinfo"><i className="fas fa-phone-alt"/>{business.phone_number}</div>
                        <div id="bizcontactinfo"><i className="fas fa-utensils"/> Full Menu</div>
                        <div id="bizcontactinfo"><i className="fas fa-comment-alt"/> Message the Business</div>
                        <div id="bizcontactinfo"><i className="fas fa-share"/> Share the Business</div>
                    </div>

                    <div className="business-show-container-mid">
                        <div>
                            Location {`&`} Hours
                        </div>
                        <div>
                            {/* reviews */}
                        </div>
                    </div>
                    <div className="business-show-container-bottom">
                        <div>
                            {/* reviews */}
                        </div>
                        <div className="business-show-container-bottom-right">
                            <div>
                                {/* business hours */}
                            </div>
                            <div>
                                {/* more business info */}
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