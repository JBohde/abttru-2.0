import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardBody, Button, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Step1 from '../formComponents/StepOne';
import Step2 from '../formComponents/StepTwo';
import Step3 from '../formComponents/StepThree';
import Step4 from '../formComponents/StepFour';
import StepZilla from 'react-stepzilla';
import '../formComponents/Dropdown.css';
import './CreateUser.css';

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doctorId: this.props.match.params.id,
      userId: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userPhoto: '',
      dob: '',
      sex: '',
      heightFoot: '',
      heightInch: '',
      weight: '',
      waist: '',
      bpSystolic: '',
      bpDiastolic: '',
      riskFactor: '',
      dietRecommendation: '',
      dietRestriction: '',
      isValid: true,
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { firstName, password } = this.state;
    const {
      history,
      match: {
        params: { id },
      },
    } = this.props;
    if (firstName && password) {
      this.setState({
        isValid: true,
      });
      axios
        .post(`/api/abttru/doctor/${id}`, this.state)
        .then(() => history.push(`/doctor/${id}`)); // redirect to admin page
    } else {
      this.setState({
        isValid: false,
      });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      userPhoto,
      dob,
      sex,
      heightFoot,
      heightInch,
      weight,
      waist,
      bpSystolic,
      bpDiastolic,
      riskFactor,
      dietRecommendation,
      dietRestriction,
      isValid,
    } = this.state;
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const steps = [
      {
        name: 'General Patient Info',
        component: (
          <Step1
            firstName={firstName}
            lastName={lastName}
            email={email}
            password={password}
            userPhoto={userPhoto}
            onChange={this.onChange}
          />
        ),
      },
      {
        name: 'Patient Statistics',
        component: (
          <Step2
            dob={dob}
            sex={sex}
            heightFoot={heightFoot}
            heightInch={heightInch}
            weight={weight}
            waist={waist}
            onChange={this.onChange}
          />
        ),
      },
      {
        name: 'Patient Health Factors',
        component: (
          <Step3
            bpSystolic={bpSystolic}
            bpDiastolic={bpDiastolic}
            riskFactor={riskFactor}
            dietRecommendation={dietRecommendation}
            dietRestriction={dietRestriction}
            onChange={this.onChange}
          />
        ),
      },
      {
        name: 'Confirm & Save',
        component: (
          <Step4
            firstName={firstName}
            lastName={lastName}
            email={email}
            password={password}
            userPhoto={userPhoto}
            dob={dob}
            sex={sex}
            heightFoot={heightFoot}
            heightInch={heightInch}
            weight={weight}
            waist={waist}
            bpSystolic={bpSystolic}
            bpDiastolic={bpDiastolic}
            riskFactor={riskFactor}
            dietRecommendation={dietRecommendation}
            dietRestriction={dietRestriction}
          />
        ),
      },
    ];
    return (
      <div className="container">
        <Card className="add-panel">
          <Card>
            <h3 className="add-patient">
              <strong>Add Patient</strong>
            </h3>
          </Card>
          <CardBody>
            <div>
              <h5 className="list">
                <Link to={{ pathname: `/doctor/${id}` }} id="doc-home">
                  <FontAwesomeIcon icon="list" /> Doctor Home
                </Link>
              </h5>

              <div className="App">
                <div className="step-progress">
                  <StepZilla
                    steps={steps}
                    showNavigation={true}
                    showSteps={true}
                    stepsNavigation={true}
                    preventEnterSubmission={true}
                    nextTextOnFinalActionStep={'Review Data'}
                    hocValidationAppliedTo={[3]}
                    startAtStep={0}
                    prevBtnOnLastStep={true}
                    onStepChange={step =>
                      window.sessionStorage.setItem('step', step)
                    }
                  />
                </div>
              </div>
              <Button
                className="btn-lg submit"
                onClick={this.onSubmit}
                color="primary"
              >
                Submit
              </Button>
            </div>
          </CardBody>
        </Card>
        <br />
        {!isValid && (
          <Alert color="danger">Please fill the required form fields.</Alert>
        )}
      </div>
    );
  }
}

export default Create;
