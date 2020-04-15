import React from 'react';
import { Link } from 'react-router-dom';

const PageFooter = () => (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-nav-bar">
                <div className="footer-nav-title">
                    <p id="footer-nav-title-github"><a href="https://github.com/HULEE119"><i className="fab fa-github"/></a></p>
                    <p id="footer-nav-title-linkedin"><a href="https://www.linkedin.com/in/mengyuanhu/"><i className="fab fa-linkedin"/></a></p>
                    <p id="footer-nav-title-angellist"><a href="https://angel.co/u/mengyuan-christina-hu"><i className="fab fa-angellist"/></a></p>
                </div>
            </div>
            <div className="footer-img">
                <img src={window.footerCityscape} className="footer-image-content" alt="footer-cityscape"/>
                <div className="footer-copyright">
                    <p>Copyright © 2020 Christina Hu-Lee --- A Yelp Clone</p>
                </div>
            </div>
        </div>
    </div>
)

export default PageFooter;