import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="#">Home</a>
        </li>
        <li className="navbar__item">
          <a href="#">In-Play</a>
        </li>
        <li className="navbar__item">
          <a href="#">Multi Markets</a>
        </li>
        <li className="navbar__item">
          <a href="#cricket">Cricket</a>
        </li>
        <li className="navbar__item">
          <a href="#">Tennis</a>
        </li>
        <li className="navbar__item">
          <a href="#">Casino</a>
        </li>
        <li className="navbar__item">
          <a href="#">Soccer</a>
        </li>
        <li className="navbar__item">
          <a href="#">Horse Racing</a>
        </li>
        <li className="navbar__item">
          <a href="#">Basketball</a>
        </li>
        <li className="navbar__item navbar__item--right">
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar