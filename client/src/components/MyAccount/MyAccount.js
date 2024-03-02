import React, { useState } from 'react';
import './MyAccount.css'

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu__toggle" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu__list">
          <li className="dropdown-menu__item">
            <a href="#">My Profile</a>
          </li>
          <li className="dropdown-menu__item">
            <a href="#">Rolling Commission</a>
          </li>
          <li className="dropdown-menu__item">
            <a href="#">Accounts Statement</a>
          </li>
          <li className="dropdown-menu__item">
            <a href="#">Bet History</a>
          </li>
          <li className="dropdown-menu__item">
            <a href="#">Profit and Loss</a>
          </li>
          <li className="dropdown-menu__item">
            <a href="#">Password History</a>
          </li>
          <li className="dropdown-menu__item">
            <a href="#">Activity Log</a>
          </li>
          <li className="dropdown-menu__item">
            <a href="#">Logout</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MyAccount
