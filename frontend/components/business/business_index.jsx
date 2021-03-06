import React from 'react';
import { Link } from 'react-router-dom';

import BusinessIndexItem from "./business_index_item";
import BusinessPageNav from '../biz_header/business_nav_container';
import PageFooter from '../footer/footer';
import BusinessMap from'../map/business_map';

class BusinessIndex extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);

        if (this.props.match.params.query) {
            this.props.searchBusinesses(this.props.match.params.query);
        } else {
            this.props.fetchAllBusinesses();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.query !== prevProps.match.params.query) {
            this.props.searchBusinesses(this.props.match.params.query);
        } 
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
                                <div className="business-index-page-container-subheader-1">
                                    <i className="fas fa-sliders-h" /> <a href="/#/businesses">All Businesses</a>
                                </div>
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

                        <div className="search-result-notification">
                            { (businesses.length !== 0) ? ( 
                                (businesses.length !== 8) ? (`Search result for "${this.props.match.params.query}". Try click on "All Businesses" to explore more!`) : (``)
                            ) : (
                                `No result found for "${this.props.match.params.query}". Try click on "All Businesses" to explore!`
                            )}
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
                                <BusinessMap businesses={businesses}/>
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