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

// const navStyle = {
//   backgroundColor: `#2C3E50`,
//   // backgroundColor: "#315659",
//   display: "inline-block",
//   float: "right",
//   color: "white"
// }

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
    {/* <a className="navbar-brand" href="" style={brandStyle}>A Better You</a> */}
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
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
