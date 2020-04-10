import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../header/page_header';
import PageFooter from '../footer/footer';

class BusinessShow extends React.Component {
    componentDidMount () {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    render () {
        const { business } = this.props;

        return (
            <div>
                <PageHeader />

                Hellor from businessId

                <PageFooter />
            </div>
        )
    }
}

export default BusinessShow;