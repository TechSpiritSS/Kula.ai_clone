import React from 'react';
import './Navbar.css';
import KulaAi from '../../assets/KulaAi.png';

const Navbar = () => {
  return (
    <nav>
      <img className="navbar-logo" src={KulaAi} alt="Kula.ai" />
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
