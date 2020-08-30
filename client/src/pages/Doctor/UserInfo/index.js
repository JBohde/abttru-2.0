import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'moment';
import { Container, Row, Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import './UserInfo.css';

class UserInfo extends React.Component {
  state = {
    patientId: this.props.match.params.id,
    doctorId: '',
    name: '',
    password: '',
    riskFactor: '',
    dietRecommendation: '',
    dietRestriction: '',
  };

  componentDidMount() {
    axios
      .get(`/api/abttru/user/${this.state.patientId}`)
      .then(res => this.setState(res.data))
      .catch(err => console.log(err));
  }

  deletePatient = event => {
    const id = event.target.id;
    axios
      .delete(`/api/abttru/user/${id}`)
      .then(() => this.props.history.push(`/doctor/${this.state.doctorId}`))
      .catch(err => console.log(err));
  };

  render() {
    Moment.locale('en');
    const {
      _id,
      dob,
      doctorId,
      firstName,
      lastName,
      userPhoto,
      email,
      riskFactor,
      heightFoot,
      heightInch,
      waist,
      weight,
      dietRecommendation,
      dietRestriction,
      bpSystolic,
      bpDiastolic,
    } = this.state;
    return (
      <Container className='mt-5'>
        <h6>
          <Link to={`/doctor/${doctorId}`}>
            <FontAwesomeIcon icon='arrow-alt-circle-left' /> BACK TO PATIENTS
          </Link>
        </h6>
        <Card className='text-center patient-info' key={_id}>
          <CardBody>
            <div>
              <Row>
                <img
                  className='img-fluid patient-thumbnail'
                  src={userPhoto}
                  alt={firstName}
                />
              </Row>
              <h2>{`${firstName} ${lastName}`}</h2>

              <div className='row'>
                <Container>
                  <h6 className='health-stats'>Email: </h6>
                  <span>{email}</span>
                  <br />
                  <h6 className='health-stats'>Risk Factor: </h6>
                  <span>{riskFactor}</span>
                  <br />
                  <h6 className='health-stats'>Height: </h6>
                  <span>
                    {heightFoot}'{heightInch}"
                  </span>
                  <br />
                  <h6 className='health-stats'>Weight: </h6>
                  <span>{weight}</span>
                  <br />
                  <h6 className='health-stats'>Waist Measure: </h6>
                  <span>{waist}</span>
                  <br />
                  <h6 className='health-stats'>DOB: </h6>
                  <span>
                    {Moment(dob).add(1, 'days').format('DD MMM YYYY')}
                  </span>
                  <br />
                  <h6 className='health-stats'>Diet Recommendation: </h6>
                  <span>{dietRecommendation}</span>
                  <br />
                  <h6 className='health-stats'>Diet Restriction: </h6>
                  <span>{dietRestriction}</span>
                  <br />
                  <h6 className='health-stats'>Systolic BP: </h6>
                  <span>{bpSystolic}</span>
                  <br />
                  <h6 className='health-stats'>Diastolic BP: </h6>
                  <span>{bpDiastolic}</span>
                </Container>
              </div>
              <span>
                <Link
                  to={{
                    pathname: `/edit/${_id}`,
                    params: {
                      data: this.state,
                      doctor_id: doctorId,
                    },
                  }}
                >
                  <FontAwesomeIcon
                    className='mx-2 my-2'
                    color='#185477'
                    icon={faPencilAlt}
                  />
                </Link>
              </span>
              <FontAwesomeIcon
                id={_id}
                className='mx-2 my-2'
                onClick={this.deletePatient.bind(this)}
                color='#EC0B43'
                style={{ cursor: 'pointer' }}
                icon={faTrashAlt}
              />
            </div>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default UserInfo;
