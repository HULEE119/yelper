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
                <li className="business-index-item-rating">
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                    <i className="fas fa-star"/>
                </li>
                <li className="business-index-item-category">
                    {business.price_range} <i className="fas fa-circle"/>
                    {business.categories.map((category, index) => {
                        if (index !== business.categories.length-1 ) {
                            return (<p key={category.id}><a href="">{category.business_type}, </a></p>)
                        } else {
                            return (<p key={category.id}><a href="">{category.business_type} </a></p>)
                        }
                    })}
                </li>
                <li className="business-index-item-address-1">
                    {business.address}
                </li>
                <li className="business-index-item-address-2">
                    {business.city}
                    {business.state}
                    {business.zip_code}
                </li>
                <li className="business-index-item-address-3">
                    <span className="business-index-item-address-3-1">Start Order</span> 
                    <span className="business-index-item-address-3-2">Offers takeout and delivery</span>
                </li>
                <li>
                    
                </li>
            </ul>
        </div>
    </div>

);

export default BusinessIndexItem;