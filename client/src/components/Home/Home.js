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
          <Col xs={0} sm={0} md={4} lg={4} />
          <Col xs={12} sm={12} md={4} lg={4}>
            <Logo />
          </Col>
          <Col xs={0} sm={0} md={4} lg={4} />
        </Row>
        <Row className="row">
          <Col xs={0} sm={0} md={3} lg={4} />
          <Col cxs={12} sm={12} md={6} lg={4} className="buttons-wrapper">
            <Button className="home-buttons">
              <h3>
                <Link to="/guest" id="nav-link">
                  <FontAwesomeIcon icon={faUser} />
                  Continue as Guest
                </Link>
              </h3>
            </Button>
            <Button className="home-buttons">
              <h3>
                <Link to="/doctorLogin" id="nav-link">
                  <FontAwesomeIcon icon={faUserMd} color="#FFFFFF" />
                  Login as Doctor
                </Link>
              </h3>
            </Button>
            <Button className="home-buttons">
              <h3>
                <Link to="/userLogin" id="nav-link">
                  <FontAwesomeIcon icon={faUser} />
                  Login as Patient
                </Link>
              </h3>
            </Button>
          </Col>
          <Col xs={0} sm={0} md={3} lg={4} />
        </Row>
      </>
    );
  }
}

export default Home;
