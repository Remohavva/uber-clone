import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const navItems = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const hash = e.target.hash;
    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-main">
          <div className="status-indicator">
            <div className="pulse-dot"></div>
            <span>Available 24/7 for your journey</span>
          </div>
        </div>
        
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="footer-title">YOU RIDE US Wherever , Whenever And On Whatever</h2>
            <a href="mailto:support@rideconnect.com" className="footer-email-button">
              support@rideconnect.com
              <span className="arrow-icon">→</span>
            </a>
          </div>
          
          <div className="footer-right">
            <nav className="footer-nav">
              {navItems.map(({ href, label }) => (
                <a href={href} key={label} onClick={handleClick} className="nav-link">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <p className="footer-copyright">
          Copyright © RideConnect • All rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;