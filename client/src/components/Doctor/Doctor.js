import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Doctor.css';
import DoctorJumbotron from '../DoctorJumbotron/DoctorJumbotron';

class Doctor extends React.Component {
  state = {
    doctorId: this.props.match.params.id,
    patients: [],
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    axios
      .get(`/api/abttru/doctor/${id}`)
      .then(res => this.setState(res.data))
      .catch(err => console.log(err));
  }

  render() {
    const savedSelect = this.state.patients.map(patient => {
      const {
        _id,
        userPhoto,
        firstName,
        lastName,
        riskFactor,
        dietRecommendation,
      } = patient;
      const {
        match: { params: id },
      } = this.props;
      return (
        <li className="patient" id={_id} key={_id}>
          <div id="patient-wrapper">
            <div>
              <Link
                to={{
                  pathname: `/show/${_id}`,
                  params: {
                    data: this.state,
                    doctorId: id,
                  },
                }}
              >
                <img
                  className="img-responsive patient-photo"
                  src={userPhoto}
                  alt="alt"
                />
              </Link>
            </div>
            <div className="patient-info">
              <h4 className="health first-last">
                {firstName} {lastName}
              </h4>
              <h6 className="health">
                <strong>Risk Factor: </strong>
                {riskFactor}
              </h6>
              <h6 className="health">
                <strong>Diet Recommendation: </strong>
                {dietRecommendation}
              </h6>
            </div>
          </div>
        </li>
      );
    });
    const { name, facilityName, specialty, doctorId, doctorPhoto } = this.state;
    return (
      <div>
        <DoctorJumbotron
          name={name}
          facilityName={facilityName}
          specialty={specialty}
          doctorPhoto={doctorPhoto}
          data={this.state}
          doctorId={doctorId}
        />
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  View My Patients
                </button>
                <ul className="dropdown-menu scrollable-menu" role="menu">
                  {savedSelect}
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" />
          </div>
        </div>
      </div>
    );
  }
}

export default Doctor;
