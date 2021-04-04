import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logo from './icons/logo.svg';

function Header() {
  return (
    <header className="navbar">
      <div className="container flex">
        <RouterLink to="/">
          <img src={logo} alt="logo" />
        </RouterLink>
        <nav>
          <ul>
            <li>
              <RouterLink to="/search/javascript">Search</RouterLink>
            </li>
            <li>
              <RouterLink to="#how-it-works">How it works</RouterLink>
            </li>
            <li>
              <RouterLink to="#about">About</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
