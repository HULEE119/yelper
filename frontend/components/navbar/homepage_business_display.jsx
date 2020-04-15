import React from 'react'; 
import { Link } from 'react-router-dom';

const HomepageBusinessDisplay = ({ business }) => (


    <div className="homepage-business-individual-display-1">
        <div className="homepage-business-individual-display-1-top"></div> 
        <div className="homepage-business-individual-display-1-bottom">
        <div className="homepage-business-individual-display-1-bottom-bizname">
            {/* Patisserie Chanson */}
            <Link to={`/businesses/${business.id}`}>{business.business_name}</Link>
        </div>
        <div className="homepage-business-individual-display-1-bottom-bizrating">
            <i className="fas fa-star"/>
            <i className="fas fa-star"/>
            <i className="fas fa-star"/>
            <i className="fas fa-star"/>
            <i className="fas fa-star"/>
        </div>
        <div className="homepage-business-individual-display-1-bottom-bizcategory">
            {/* Bakeries, Breakfast, Brunch, Sandwiches */}
            {business.categories.map((category, index) => {
                if (index !== business.categories.length-1 ) {
                return (<span key={category.id}>{category.business_type},</span>)
                } else {
                    return (<span key={category.id}>{category.business_type} </span>)
                }
            })}
        </div>
        <div className="homepage-business-individual-display-1-bottom-bizaddress">
            {/* Downtown Manhattan, New York */}
            {business.address}, {business.city} {business.state} {business.zip_code}
        </div>
        <div className="homepage-business-individual-display-1-bottom-bizhot">
            <i className="fab fa-hotjar"/> Opened 7 weeks ago
        </div>
        </div> 
    </div>

)

export default HomepageBusinessDisplay;