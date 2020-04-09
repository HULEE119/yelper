import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllBusinesses();
    }
    
}

export default BusinessIndex;