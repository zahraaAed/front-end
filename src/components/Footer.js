import React from 'react';
import Instagram from '../images/instagram.png';
import Location from '../images/location.png';
import "../pages/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <h2 className="footer-title">Blooming</h2>
            <div className="icons">
                <div className="instagram-icon">
                    <img src={Instagram} alt="Instagram" />
                    <span className="icon-text">Blooming-lb</span>
                </div>
                <div className="location-icon">
                    <img src={Location} alt="Location" />
                    <span className="icon-text">Tripoli,Lebanon</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;