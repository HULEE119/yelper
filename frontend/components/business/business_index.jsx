import React from 'react';
import { Link } from 'react-router-dom';

import BusinessIndexItem from './business_index_container';
import BusinessPageNav from '../biz_header/business_nav_container';
import PageFooter from '../footer/footer';

class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllBusinesses();
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
                                <p className="business-index-page-container-subheader-1"><i className="fas fa-sliders-h" /> All</p>
                                <p className="business-index-page-container-subheader-2"><i className="fas fa-dollar-sign" /> Price</p>
                                <p className="business-index-page-container-subheader-3">Open Now</p>
                            </div>
                        </div>

                        <div className="business-index-page-subcontainer">
                            <div className="business-index-page-business-list">
                                {businesses.map((business) => (<BusinessIndexItem business={business} key={business.id} />))}
                            </div>
                            <div className="business-index-page-business-map">
                                map box
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