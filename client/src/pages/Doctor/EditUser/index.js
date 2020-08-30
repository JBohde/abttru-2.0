import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StepZilla from 'react-stepzilla';
import Step1 from '../../../components/MultiStepForm/StepOne';
import Step2 from '../../../components/MultiStepForm/StepTwo';
import Step3 from '../../../components/MultiStepForm/StepThree';
import Step4 from '../../../components/MultiStepForm/StepFour';

import '../../../components/MultiStepForm/FullForm.css';

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get(`/api/abttru/user/${this.props.match.params.id}`)
      .then(res => {
        this.setState(res.data);
      })
      .catch(err => console.log(err));
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { _id, doctorId } = this.state;
    axios.put(`/api/abttru/user/${_id}`, this.state).then(() =>
      this.props.history.push({
        pathname: `/show/${_id}`,
        params: { data: this.state, doctorId },
      }),
    ); // redirect back to the show page
  };

  render() {
    const {
      doctorId,
      firstName,
      lastName,
      email,
      password,
      userPhoto,
      sex,
      dob,
      heightFoot,
      heightInch,
      weight,
      waist,
      bpSystolic,
      bpDiastolic,
      riskFactor,
      dietRecommendation,
      dietRestriction,
    } = this.state;

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
            pathName={this.props.match.path}
            sex={sex}
            dob={dob}
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
              <Link to={{ pathname: `/doctor/${doctorId}` }}>
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
      </Container>
    );
  }
}

export default EditUser;
