import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardBody, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'moment';
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
      .then(res => {
        this.setState(res.data);
      })
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
      name,
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
      <div className="container">
        <Card className="patient-card" key={_id}>
          <h4>{name}</h4>
          <CardBody>
            <div className="user-info">
              <h5 className="patients">
                <Link to={`/doctor/${doctorId}`} className="patients">
                  <FontAwesomeIcon icon="list" /> My Patients
                </Link>
              </h5>

              <h2 className="patients">{`${firstName} ${lastName}`}</h2>
              <div id="user-photo" className="row">
                <img id="user-thumb" src={userPhoto} alt={firstName} />
              </div>
              <div id="user-stats" className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <h5 className="health-stats">Email: </h5>
                  <span>{email}</span>
                  <br />
                  <h5 className="health-stats">Risk Factor: </h5>
                  <span>{riskFactor}</span>
                  <br />
                  <h5 className="health-stats">Height: </h5>
                  <span>
                    {heightFoot}'{heightInch}"
                  </span>
                  <br />
                  <h5 className="health-stats">Weight: </h5>
                  <span>{weight}</span>
                  <br />
                  <h5 className="health-stats">Waist Measure: </h5>
                  <span>{waist}</span>
                  <br />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <h5 className="health-stats">DOB: </h5>
                  <span>
                    {Moment(dob)
                      .add(1, 'days')
                      .format('MMMM Do YYYY')}
                  </span>
                  <br />
                  <h5 className="health-stats">Diet Recommendation: </h5>
                  <span>{dietRecommendation}</span>
                  <br />
                  <h5 className="health-stats">Diet Restriction: </h5>
                  <span>{dietRestriction}</span>
                  <br />
                  <h5 className="health-stats">Systolic BP: </h5>
                  <span>{bpSystolic}</span>
                  <br />
                  <h5 className="health-stats">Diastolic BP: </h5>
                  <span>{bpDiastolic}</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-8" />
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                <div className="stepzilla-button-wrapper">
                  <Button
                    id={_id}
                    onClick={this.deletePatient.bind(this)}
                    className="btn-lg delete"
                    color="danger"
                  >
                    Delete
                  </Button>
                  <Button className="btn-lg" color="primary">
                    <Link
                      className='stepzilla-link'
                      to={{
                        pathname: `/edit/${_id}`,
                        params: {
                          data: this.state,
                          doctor_id: doctorId,
                        },
                      }}
                    >
                      Edit Info
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UserInfo;
