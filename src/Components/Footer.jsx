import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Hithashree A M | All Rights Reserved</p>
        <div className="social-links">
          <a href="https://github.com/Hithashree1384" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/hithashree" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:hithashree@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
