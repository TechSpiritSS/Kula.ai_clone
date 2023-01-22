import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <img
        className="navbar-logo"
        src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png"
        alt="Kula.ai"
      />
      <ul className="navbar">
        <li>
          <span className="navbar-link">Product</span>
        </li>
        <li>
          <span className="navbar-link">Our Story</span>
        </li>
        <li>
          <span className="navbar-link">Resources</span>
        </li>
      </ul>
      <button className="navbar-demo-button">Demo</button>
    </nav>
  );
};

export default Navbar;
