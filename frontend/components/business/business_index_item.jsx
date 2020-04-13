import React from 'react'; 
import { Link } from 'react-router-dom';

const BusinessIndexItem = ({ business, index }) => (

    <div className="business-index-item-page-container">
        <div className="business-index-item-image-container">

        </div>
        <div className="business-index-item-details-container">
            <ul>
                <li className="business-index-item-bizname">
                    <Link to={`/businesses/${business.id}`}>
                        {index + 1}. {business.business_name}
                    </Link>
                </li>
                <li>{business.address}</li>
                <li>
                    {business.city}
                    {business.city}
                    {business.state}
                    {business.zip_code}
                </li>
            </ul>
        </div>
    </div>

);

export default BusinessIndexItem;