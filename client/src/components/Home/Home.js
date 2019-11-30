import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import Logo from './Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserMd } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

class Home extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Row className="row">
          <Col xs={0} sm={0} md={3} lg={3} xl={4} />
          <Col cxs={12} sm={12} md={6} lg={6} xl={4} >
            <div className="login-wrapper">
              <Logo />
              <Button className="home-buttons">
                <h3>
                  <Link to="/userlogin" className="login-link">
                    <FontAwesomeIcon icon={faUser} className="login-icon" />
                    Patient Login
                </Link>
                </h3>
              </Button>
              <Button className="home-buttons">
                <h3>
                  <Link to="/doctorlogin" className="login-link">
                    <FontAwesomeIcon icon={faUserMd} color="#FFFFFF" className="login-icon" />
                    Doctor Login
                </Link>
                </h3>
              </Button>
              <Button className="home-buttons">
                <h3>
                  <Link to="/guest" className="login-link">
                    <FontAwesomeIcon icon={faUser} className="login-icon" />
                    Guest
                </Link>
                </h3>
              </Button>
            </div>
          </Col>
          <Col xs={0} sm={0} md={3} lg={3} xl={4} />
        </Row>
      </>
    );
  }
}

export default Home;
