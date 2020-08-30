import React from 'react';
import Moment from 'moment';

const StepFour = props => {
  const {
    firstName,
    lastName,
    email,
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
  } = props;

  return (
    <div className='step'>
      <h5 className='review-info'>First Name: {firstName}</h5>
      <h5 className='review-info'>Last Name: {lastName}</h5>
      <h5 className='review-info'>Email: {email}</h5>
      <h5 className='review-info'>Password: ****************************</h5>
      <h5 className='review-info'>IMG: {userPhoto}</h5>
      <h5 className='review-info'>DOB: {Moment(dob).format('DD MMM YYYY')}</h5>
      <h5 className='review-info'>Sex: {sex}</h5>
      <h5 className='review-info'>
        Height: {heightFoot}' {heightInch}"
      </h5>
      <h5 className='review-info'>Weight: {weight}</h5>
      <h5 className='review-info'>Waist Measurement: {waist}</h5>
      <h5 className='review-info'>BP -- Systolic: {bpSystolic}</h5>
      <h5 className='review-info'>BP -- Diastolic: {bpDiastolic}</h5>
      <h5 className='review-info'>Health Risk Factor: {riskFactor}</h5>
      <h5 className='review-info'>Diet Recommendation: {dietRecommendation}</h5>
      <h5 className='review-info'>Diet Restriction: {dietRestriction}</h5>
    </div>
  );
};

export default StepFour;
