import React from 'react';
import { Link } from 'react-router-dom';

import BusinessPageNav from '../biz_header/business_nav_container';
import PageFooter from '../footer/footer';
import BusinessMap from '../map/business_map';
import ReviewIndex from "../review/review_index";


class BusinessShow extends React.Component {

    componentDidMount () {
        window.scrollTo(0, 0);
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
                        <label><i className="fas fa-shopping-basket" /><Link to="/businesses"> All Businesses</Link></label>
                    </div>
                    <div>
                        <label><i className="fas fa-utensils"/> Restaurants</label>
                    </div>
                    <div>
                        <label><i className="fab fa-canadian-maple-leaf"/> Parks</label>
                    </div>
                    <div>
                        <label><i className="fab fa-fort-awesome"/> Castles</label>
                    </div>
                    <div>
                        <label><i className="fas fa-cookie-bite"/> Cookies</label>
                    </div>
                </div>
                <div className="business-show-images">
                    {/* <div className="business-show-images-1"></div>
                    <div className="business-show-images-2"></div>
                    <div className="business-show-images-3"></div>
                    <div className="business-show-images-4"></div> */}

                    {business.photos.map((photo, index) => {
                        return (
                            <img 
                                src={photo} 
                                key={index}
                                alt="biz-photo"
                            />
                        )
                    })}
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
                                <i className="fas fa-star"/>
                            </p>
                            <p className="biz-show-container-top-bizinfo-category">
                                <span>{business.price_range} •</span>
                                {business.categories.map((category, index) => {
                                    if (index !== business.categories.length-1 ) {
                                    return (<span key={category.id}>{category.business_type},</span>)
                                    } else {
                                        return (<span key={category.id}>{category.business_type} </span>)
                                    }
                                })}
                            </p>
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
                    <div className="business-show-container-mid-header">
                        Location {`&`} Hours
                    </div>
                    <div className="business-show-container-mid">
                        <div className="business-show-container-mid-map">
                            <div id="biz-show-map"><BusinessMap /></div>
                            <div className="business-show-container-mid-address">
                                <div>
                                    {business.address}
                                </div>
                                <div>
                                    {business.city}
                                    {business.state}
                                    {business.zip_code}
                                </div>
                            </div>
                        </div>
                        <div className="business-show-container-mid-hours">
                            <div><p id="week">Mon</p><p>{business.opening_hours}</p></div>
                            <div><p id="week">Tue</p><p>{business.opening_hours}</p></div>
                            <div><p id="week">Wed</p><p>{business.opening_hours}</p></div>
                            <div><p id="week">Thu</p><p>{business.opening_hours}</p></div>
                            <div><p id="week">Fri</p><p>{business.opening_hours}</p></div>
                            <div><p id="week">Sat</p><p>{business.opening_hours}</p></div>
                            <div><p id="week">Sun</p><p>{business.opening_hours}</p></div>
                        </div>
                    <div>

                        </div>
                    </div>
                    <div className="business-show-container-mid-header">
                        Recommended Reviews
                    </div>

                    <div className="business-show-review-demo">
                        <div id="review-demo"></div>
                        <div className="business-show-review-demo-details">
                            <div id="demo-ratings">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                            </div> 
                            <div>Start your review of <span id="demo-bizname">{business.business_name}</span></div>
                        </div>
                    </div>

                    <div className="business-show-container-bottom">
                        <div className="business-show-review-user">
                            {/* User Info */}
                            {/* {business.reviews.map((review, index) => {
                                return (
                                    <span>{review.body}</span>
                                )
                            })} */}
                            {/* <ReviewIndex 
                                business={business}
                                // reviews={reviews}
                                // reviewers={users}
                                currentUser={currentUser}
                            /> */}
                        </div>
                        <div className="business-show-container-bottom-right">
                            <div>
                                {/* Ratings */}
                            </div>
                            <div>
                                {/* Reviews */}
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