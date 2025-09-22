import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Channel9 Bakery. All rights reserved.</p>
                <p>Freshly baked with love and a sprinkle of magic!</p>
            </div>
            <div className="footer-links">
                <a href="#about">About Us</a>
                <a href="#contact">Contact</a>
                <a href="#privacy">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;