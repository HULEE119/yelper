import React from 'react'; 
import { Link } from 'react-router-dom';

const HomepageBusinessDisplay = () => (


    <div className="homepage-business-individual-display-1">
        <div className="homepage-business-individual-display-1-top"></div> 
        <div className="homepage-business-individual-display-1-bottom">
        <div className="homepage-business-individual-display-1-bottom-bizname">
            Patisserie Chanson
        </div>
        <div className="homepage-business-individual-display-1-bottom-bizrating">
            <i className="fas fa-star"/>
            <i className="fas fa-star"/>
            <i className="fas fa-star"/>
            <i className="fas fa-star"/>
            <i className="fas fa-star-half-alt"/>
        </div>
        <div className="homepage-business-individual-display-1-bottom-bizcategory">
            Bakeries, Breakfast, Brunch, Sandwiches
        </div>
        <div className="homepage-business-individual-display-1-bottom-bizaddress">
            Downtown Manhattan, New York
        </div>
        <div className="homepage-business-individual-display-1-bottom-bizhot">
            <i className="fab fa-hotjar"/> Opened 7 weeks ago
        </div>
        </div> 
    </div>

)

export default HomepageBusinessDisplay;