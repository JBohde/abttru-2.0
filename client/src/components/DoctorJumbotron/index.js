import React from 'react';
import { Jumbotron, Col, Row, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './DoctorJumbotron.css';

const DoctorJumbotron = props => {
  const { doctorPhoto, name, specialty, facilityName, doctorId, data } = props;
  return (
    <Jumbotron>
      <Row>
        <Col xs={2} />
        <Col xs={10} md={2} className='prof'>
          <img id='doctor_photo' src={doctorPhoto} alt='doctor_photo' />
        </Col>
        <Col xs={12} md={1} />
        <Col xs={12} md={6}>
          <Col xs={12}>
            <h2 className='about-doc'>Dr. {name}</h2>
          </Col>
          <Col xs={12}>
            <h3 className='about-doc'>
              Specialty:
              <br />{' '}
            </h3>
            <h5>{specialty}</h5>
          </Col>
          <Col xs={12}>
            <h3 className='about-doc'>
              Facility Name:
              <br />{' '}
            </h3>
            <h5>{facilityName}</h5>
          </Col>
          <Col xs={12}>
            <Link
              to={{
                pathname: `/create/${doctorId}`,
                params: {
                  data,
                  doctorId,
                },
              }}
            >
              {' '}
              <Button className='btn add-patient'>
                <FontAwesomeIcon icon='user-plus' />
                Add Patient
              </Button>
            </Link>
          </Col>
        </Col>
        <Col xs={2} md={1} />
      </Row>
    </Jumbotron>
  );
};

export default DoctorJumbotron;
