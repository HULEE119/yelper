import React from 'react';
import { Link } from 'react-router-dom';

const PageFooter = () => (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-nav-bar">
                <ul className="footer-nav-title">
                    <li>Yelper</li>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="footer-img">
                <img src={window.footerCityscape} className="footer-image-content" alt="footer-cityscape"/>
                <div className="footer-copyright">
                    <p>Copyright © 2020 Christina Hu-Lee</p>
                </div>
            </div>
        </div>
    </div>
)

export default PageFooter;