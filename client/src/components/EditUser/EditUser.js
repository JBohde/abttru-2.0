import React from 'react';
import axios from 'axios';
import { Card, Button } from 'reactstrap';
import Step1 from '../formComponents/StepOne';
import Step2 from '../formComponents/StepTwo';
import Step3 from '../formComponents/StepThree';
import Step4 from '../formComponents/StepFour';
import StepZilla from 'react-stepzilla';

class EditUser extends React.Component {
  state = {};

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
        params: { data: this.state, doctorId: doctorId },
      }),
    ); // redirect back to the show page
  };

  render() {
    const {
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
            pathName={this.props.match.path}
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
        <Card className="edit-patient">
          <div className="App">
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
                onStepChange={step =>
                  window.sessionStorage.setItem('step', step)
                }
              />
              <Button
                className="btn-lg submit"
                onClick={this.onSubmit}
                color="primary"
              >
                Submit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default EditUser;
