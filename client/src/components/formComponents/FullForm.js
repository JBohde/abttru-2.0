import React, { Component } from 'react';
import {
  Panel,
  Button,
  Form,
  FormGroup,
  FormControl,
  Label,
  Alert,
} from 'reactstrap';
import axios from 'axios';
import Step1 from './StepOne';
import Step2 from './StepTwo';
import Step3 from './StepThree';
import Step4 from './StepFour';
import StepZilla from 'react-stepzilla';
import './Dropdown.css';
import './FullForm.css';

class FullForm extends Component {
  state = {
    doctorId: this.props.location.params.data.doctor_id,
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
    riskRactor: '',
    dietRecommendation: '',
    bpSystolic: '',
    bpSiastolic: '',
    isValid: true,
  };

  onChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    const {
      location: {
        params: {
          data: { doctorId },
        },
      },
      history,
    } = this.props;
    const { email, password } = this.state;
    e.preventDefault();
    if (email && password) {
      this.setState({ isValid: true });
      axios
        .post(`/api/abttru/doctor/${doctorId}`, this.state)
        .then(() => {
          history.push(`/doctor/${doctorId}`);
        }) // redirect to admin page
        .catch(err => console.log(err));
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
            onChange={this.onChangeHandler}
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
            onChange={this.onChangeHandler}
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
            onChange={this.onChangeHandler}
          />
        ),
      },
      {
        name: 'Confirm',
        nextButtonText: 'Save',
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
      <div className="step-progress">
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
          onStepChange={step => window.sessionStorage.setItem('step', step)}
        />
      </div>
    );
  }
}

export default FullForm;
