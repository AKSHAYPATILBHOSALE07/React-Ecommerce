import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles/NavBar.css';

const NavBar = ({ background }) => {
  // I declare a variable where I will store the path of the image that I want to display
  const brand =
    'https://f.hubspotusercontent10.net/hub/20044066/hubfs/raw_assets/public/kong/images/logo.png?width=190&name=logo.png';
 //the logic always goes before the return
  return (
    <header className={`header background--${background}`}>
      <div className="header-container">
        {/* Menu button */}
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white" />
          <span>Menu</span>
        </div>

        {/* navigation links */}
        <nav>
          <ul className="nav-container">
            <li>
              <Link to="/">Beginning</Link>
            </li>
            <li className="products-item">
              <Link to="/products">
                Products <span className="arrow"></span>
              </Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

       {/* brand logo */}
        <div className="logo-container">
          <Link to="/">
            <img src={brand} alt="logo" />
          </Link>
        </div>

        {/* cart widget */}
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
