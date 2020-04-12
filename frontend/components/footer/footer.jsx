import React from 'react';
import { Link } from 'react-router-dom';

const PageFooter = () => (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-nav-bar">
                <div className="footer-nav-title">
                    <p id="footer-nav-title-github"><i className="fab fa-github"/></p>
                    <p id="footer-nav-title-linkedin"><i className="fab fa-linkedin"/></p>
                    <p id="footer-nav-title-angellist"><i className="fab fa-angellist"/></p>
                </div>
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