import React from 'react';
import './menu.scss';

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li>
          <a href='#intro' onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href='#about' onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href='#portfolio' onClick={() => setMenuOpen(false)}>
            Portfolio
          </a>
        </li>
        <li>
          <a href='#testamonials' onClick={() => setMenuOpen(false)}>
            Testamonials
          </a>
        </li>
        <li>
          <a href='#contact' onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
      {/* <p>Website Made by Ethan Cannelongo</p> */}
    </div>
  );
};

export default Menu;
