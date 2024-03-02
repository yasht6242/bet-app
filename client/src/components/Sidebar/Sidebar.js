import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__heading">Sports</h2>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <a href="#cricket">Cricket</a>
        </li>
        <li className="sidebar__item">
          <a href="#tennis">Tennis</a>
        </li>
        <li className="sidebar__item">
          <a href="#casino">Casino</a>
        </li>
        <li className="sidebar__item">
          <a href="#soccer">Soccer</a>
        </li>
        <li className="sidebar__item">
          <a href="#horseracing">Horse Racing</a>
        </li>
        <li className="sidebar__item">
          <a href="#basketball">Basketball</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
