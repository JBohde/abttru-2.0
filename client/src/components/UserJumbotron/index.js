import React from 'react';
import { Jumbotron, Container, Row, Col, Button, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faSearch,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

import cholesterolIcon from './icons/high-cholesterol.png';
import diabetesIcon from './icons/diabetes.png';
import healthyIcon from './icons/healthy.png';
import weightIcon from './icons/weight.png';
import glucoseIcon from './icons/glucometer.png';
import restrictionIcon from './icons/restriction.png';
import pressureIcon from './icons/pressure.png';
import tapeIcon from './icons/tape.png';
import dietIcon from './icons/diet.png';

import './UserJumbotron.css';

const determineRiskIcon = risk => {
  switch (risk) {
    case 'Healthy':
      return healthyIcon;
    case 'Obesity':
      return weightIcon;
    case 'Elevated Cholesterol':
      return cholesterolIcon;
    case 'Diabetic':
      return diabetesIcon;
    default:
      return healthyIcon;
  }
};

class UserJumbotron extends React.Component {
  constructor(props, context) {
    super(props, context);
    const {
      userId,
      riskFactor,
      dietLabel,
      waist,
      bpSystolic,
      bpDiastolic,
      healthLabel,
      isUserPage,
    } = this.props;

    this.state = {
      waist,
      bpSystolic,
      bpDiastolic,
      userId,
      riskFactor,
      dietRecommendation: dietLabel,
      dietRestriction: healthLabel,
      isUserPage,
      savedTab: '',
      profileTab: '',
    };
  }

  fontAwesomeColor = () =>
    this.props.riskFactor === 'high-cholesterol' ? 'red' : 'black';

  profileTabColor = () => (this.props.isUserPage ? '#FAF8F0' : '#185477');

  savedTabColor = () => (this.props.isUserPage ? '#185477' : '#FAF8F0');

  render() {
    const {
      userId,
      firstName,
      lastName,
      userPhoto,
      waist,
      bpSystolic,
      riskFactor,
      dietLabel,
      dietRestriction,
    } = this.props;
    const riskIcon = determineRiskIcon(riskFactor);
    return (
      <Jumbotron>
        <Container>
          <Row className='patient-profile'>
            <Col xs={12} md={4}>
              <div className='user-image'>
                {userPhoto.length ? (
                  <Media
                    className='img-fluid'
                    src={userPhoto}
                    alt={`${firstName} ${lastName}`}
                  />
                ) : (
                  <FontAwesomeIcon icon={faUser} size='5x' style={ {color: '#2c3e50'}}className='user-icon' />
                )}
              </div>
            </Col>
            <Col xs={12} md={8}>
              <Row>
                <Col xs={6} md={4} className='stats-wrapper'>
                  <Media
                    src={riskIcon}
                    alt='risk icon'
                    className='health-icon'
                  />
                  <span className='health_stats'>
                    Risk Factor: <br /> {riskFactor}
                  </span>
                </Col>
                <Col xs={6} md={4} className='stats-wrapper'>
                  <Media
                    src={pressureIcon}
                    alt='bp icon'
                    className='health-icon'
                  />
                  <span className='health_stats'>
                    Blood Pressure: <br />
                    {bpSystolic}
                  </span>
                </Col>
                <Col xs={6} md={4} className='stats-wrapper'>
                  <Media
                    src={glucoseIcon}
                    alt='glucose icon'
                    className='health-icon'
                  />
                  <span className='health_stats'>
                    Blood Sugar: <br />
                    80 mg/dL
                  </span>
                </Col>
                <Col xs={6} md={4} className='stats-wrapper'>
                  <Media
                    src={tapeIcon}
                    alt='tape icon'
                    className='health-icon'
                  />
                  <span className='health_stats'>
                    Waist: <br /> {waist}&nbsp;''
                  </span>
                </Col>
                <Col xs={6} md={4} className='stats-wrapper'>
                  <Media
                    src={dietIcon}
                    alt='diet icon'
                    className='health-icon'
                  />
                  <span className='health_stats'>
                    Diet: <br /> {dietLabel}
                  </span>
                </Col>
                <Col xs={6} md={4} className='stats-wrapper'>
                  <Media
                    src={restrictionIcon}
                    alt='restriction icon'
                    className='health-icon'
                  />
                  <span className='health_stats'>
                    Restriction: <br /> {dietRestriction}
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className='tabGroup'>
          <Link
            to={{
              pathname: `/user/${userId}`,
              params: { id: userId },
            }}
          >
            <Button
              id='profileTab'
              style={{ backgroundColor: this.profileTabColor() }}
            >
              <p
                style={{
                  color: this.savedTabColor(),
                  margin: '0.25rem 0',
                  fontSize: '.85rem',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className='tab-icon'
                  alt='search icon'
                  size='2x'
                />
                &nbsp; NEW SEARCH
              </p>
            </Button>
          </Link>

          <Link
            to={{
              pathname: `/recipes/${userId}`,
              params: { id: userId },
            }}
          >
            <Button
              id='savedTab'
              style={{ backgroundColor: this.savedTabColor() }}
            >
              <p
                style={{
                  color: this.profileTabColor(),
                  margin: '0.25rem 0',
                  fontSize: '.85rem',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <FontAwesomeIcon
                  icon={faBookOpen}
                  alt='saved recipes icon'
                  className='tab-icon'
                  size='2x'
                />
                &nbsp; SAVED RECIPES
              </p>
            </Button>
          </Link>
        </div>
      </Jumbotron>
    );
  }
}

export default UserJumbotron;
