import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from "reactstrap";
import Logo from './Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserMd } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

class Home extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-0 col-sm-0 col-md-4 col-lg-4" />
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <Logo />
          </div>
          <div className="col-0 col-sm-0 col-md-4 col-lg-4" />
        </div>
        <div className="row">
          <div className="col-0 col-sm-0 col-md-3 col-lg-4" />
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 home-buttons">
            <button type="button" className="btn btn-secondary welcome">
              <h3>
                <Link to="/guest" id="nav-link">
                  <FontAwesomeIcon icon={faUser} />
                  Continue as Guest
                </Link>
              </h3>
            </button>
            <button type="button" className="btn btn-secondary welcome">
              <h3>
                <Link to="/doctorLogin" id="nav-link">
                  <FontAwesomeIcon icon={faUserMd} color="#FFFFFF" />
                  Login as Doctor
                </Link>
              </h3>
            </button>
            <button type="button" className="btn btn-secondary welcome">
              <h3>
                <Link to="/userLogin" id="nav-link">
                  <FontAwesomeIcon icon={faUser} />
                  Login as Patient
                </Link>
              </h3>
            </button>
          </div>
          <div className="col-0 col-sm-0 col-md-3 col-lg-4" />
        </div>
      </div>
    );
  }
}

export default Home;
