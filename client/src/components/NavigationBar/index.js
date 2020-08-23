import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

const linkStyle = {
  color: 'white',
  fontSize: '16px',
  float: 'right',
};

const logoStyle = {
  width: '50px',
  height: 'auto',
};

const Nav = () => (
  <nav className="navbar navbar-default">
    <Link to="/">
      <div className="navbar-left logo">
        <img src={require('./abttru-logo2.png')} style={logoStyle} alt="logo" />
      </div>
    </Link>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/">
          <li className="nav-item">
            <FontAwesomeIcon icon={faHome} style={linkStyle} />
            <span className="home">Home </span>
          </li>
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;
