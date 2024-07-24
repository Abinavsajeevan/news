import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <header>
      <h1>News Site</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/world">World</Link></li>
          <li><Link to="/technology">Technology</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
