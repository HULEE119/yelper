import React from 'react'; 

const BusinessIndexItem = ({ business }) => (

    <div>

        <ul>
            <li>{business.business_name}</li>
            <li>{business.address}</li>
            <li>
                {business.city}
                {business.city}
                {business.state}
                {business.zip_code}
            </li>
        </ul>
    </div>

);

export default BusinessIndexItem;