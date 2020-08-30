import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StepZilla from 'react-stepzilla';

import Step1 from '../../../components/MultiStepForm/StepOne';
import Step2 from '../../../components/MultiStepForm/StepTwo';
import Step3 from '../../../components/MultiStepForm/StepThree';
import Step4 from '../../../components/MultiStepForm/StepFour';

import './CreatePatient.css';

class CreatePatient extends React.Component {
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
    this.setState({ [e.target.name]: e.target.value });
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
      this.setState({ isValid: true });
      axios
        .post(`/api/abttru/doctor/${id}`, this.state)
        .then(() => history.push(`/doctor/${id}`)); // redirect to admin page
    } else {
      this.setState({ isValid: false });
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
        name: 'General Info',
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
        name: 'Statistics',
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
        name: 'Health Factors',
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
        name: 'Review',
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
      <Container>
        <Row>
          <Col xs={12} md={2} className='mt-4'>
            <h6>
              <Link to={{ pathname: `/doctor/${id}` }}>
                <FontAwesomeIcon icon='arrow-alt-circle-left' /> BACK TO
                PATIENTS
              </Link>
            </h6>
          </Col>
          <Col xs={12} md={8}>
            <Container className='step-container pt-3 mt-3 mt-lg-5'>
              <h3 className='text-center'>EDIT PATIENT</h3>
              <div className='step-progress'>
                <StepZilla
                  steps={steps}
                  showNavigation={true}
                  showSteps={true}
                  stepsNavigation={true}
                  preventEnterSubmission={true}
                  nextTextOnFinalActionStep={'Review'}
                  hocValidationAppliedTo={[3]}
                  startAtStep={0}
                  prevBtnOnLastStep={true}
                  onStepChange={step =>
                    window.sessionStorage.setItem('step', step)
                  }
                />
              </div>
              <Button
                className='btn-lg'
                onClick={this.onSubmit}
                color='primary'
                style={{
                  backgroundColor: '#185477',
                  position: 'absolute',
                  bottom: '0',
                  width: '6rem',
                  margin: '0 auto',
                  right: '8rem',
                }}
              >
                Submit
              </Button>
            </Container>
          </Col>
        </Row>
        <br />
        {!isValid && (
          <Alert color='danger'>Please fill the required form fields.</Alert>
        )}
      </Container>
    );
  }
}

export default CreatePatient;
