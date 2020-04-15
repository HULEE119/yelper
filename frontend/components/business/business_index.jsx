import React from 'react';
import { Link } from 'react-router-dom';

import BusinessIndexItem from "./business_index_item";
import BusinessPageNav from '../biz_header/business_nav_container';
import PageFooter from '../footer/footer';
import BusinessMap from'../map/business_map';

class BusinessIndex extends React.Component {
    componentDidMount() {
        // if ( this.props.businesses.length === 0 ) {
        //     this.props.fetchAllBusinesses();
        // } 

        this.props.fetchAllBusinesses();

    }

    update(price_range) {
        this.setState({ price_range: price_range });
    }

    render () {
        const { businesses } = this.props;

        return (
            <div>
                <BusinessPageNav />
                
                <div>
                    <div className="business-index-page-container-top-border"></div>

                    <div className="business-index-page-container">
                        <div className="business-index-page-container-header">
                            <p className="business-index-page-container-header-text">Best Places in New York, NY</p> 
                            <div className="business-index-page-container-subheader">
                                <div className="business-index-page-container-subheader-1"><i className="fas fa-sliders-h" /> All Businesses</div>
                                <div className="business-index-page-container-subheader-2">
                                    <i className="fas fa-dollar-sign" /> Price Range <i className="fas fa-caret-down"/>
                                    <ul className="business-index-page-container-subheader-2-dropdown">
                                        <li onClick={() => this.update("$")}>$</li>
                                        <li onClick={() => this.update("$$")}>$$</li>
                                        <li onClick={() => this.update("$$$")}>$$$</li>
                                        <li onClick={() => this.update("$$$$")}>$$$$</li>
                                    </ul>
                                </div>
                                <div className="business-index-page-container-subheader-3">Open Now</div>
                            </div>
                        </div>

                        <div className="business-index-page-subcontainer">
                            <div className="business-index-page-business-list">
                                {
                                    businesses.map((business, index) => {
                                        return (
                                            <BusinessIndexItem
                                                business={business}
                                                key={index}
                                                index={index}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className="business-index-page-business-map">
                                {/* map box */}
                                <BusinessMap />
                            </div>
                        </div>
                    </div>
                </div>


                <PageFooter />
            </div>
        )
    }
}

export default BusinessIndex;