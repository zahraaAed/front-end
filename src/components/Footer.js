
import React from 'react';
import img1 from '../images/instagram.png';
import img2 from '../images/location.png';
import "../components/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <h2 className="title">Blooming</h2>
            <div className="icons">
                <div className="icon">
                    <img src={img1} alt="Instagram" />
                    <span className="icon-text">Blooming-lb</span>
                </div>
                <div className="icon">
                    <img src={img2} alt="Location" />
                    <span className="icon-text">Tripoli,Lebanon</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
