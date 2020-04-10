import React from 'react';
import { Link } from 'react-router-dom';

import BusinessIndexItem from './business_index_item';
import PageHeader from '../header/page_header';

class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllBusinesses();
    }

    render () {
        const { businesses } = this.props;

        return (
            <div>
                <PageHeader />

                { businesses.map(business => (
                    <BusinessIndexItem 
                        business={business}
                        key={business.id}
                    />
                ))}
            </div>
        )
    }
}

export default BusinessIndex;