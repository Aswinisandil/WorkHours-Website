import React, { useState } from 'react';
import './SideNavMenu.css'; // Import CSS file for styling

const SideNavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`side-nav-menu ${isMenuOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={openMenu}>
        Open Menu
      </button>

      {/* {isOpen && (
        <div className="menu-content">
          <button className="close-button" onClick={closeMenu}>Close Component</button>
        </div>
      )} */}
       {isOpen && (
      <div className="menu-content">
        <button className="close-button" onClick={closeMenu}>
          &times;
        </button>

        <ul>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
          <li>
            <a href="#">Item 3</a>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>

      )}
    </div>
  );
};

export default SideNavMenu;
