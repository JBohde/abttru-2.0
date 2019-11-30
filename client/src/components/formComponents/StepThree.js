import React from 'react';

const StepThree = props => {
  const {
    bpDiastolic,
    bpSystolic,
    riskFactor,
    dietRecommendation,
    dietRestriction,
    onChange,
  } = props;

  return (
    <div className='steppy'>
      <form>
        <h4>Blood Pressure: Systolic</h4>
        <select
          className='input-wizard'
          value={bpSystolic}
          name='bpSystolic'
          onChange={onChange}
        >
          <option value='' disabled> Systolic</option>
          <option value='Normal'>Less than 120 mmHg</option>
          <option value='At Risk'>120-139 mmHg</option>
          <option value='High Risk'>140 mmHg +</option>
        </select>

        <h4>Blood Pressure: Diastolic</h4>
        <select
          className='input-wizard'
          value={bpDiastolic}
          name='bpDiastolic'
          onChange={onChange}
        >
          <option value='' disabled>Diastolic</option>
          <option value='Normal'>Less than 80 mmHg</option>
          <option value='At Risk'>80-89 mmHg</option>
          <option value='High Risk'>90 mmHg +</option>
        </select>

        <h4>Health Risk Factor:</h4>
        <select
          className='input-wizard'
          value={riskFactor}
          name='riskFactor'
          onChange={onChange}
        >
          <option value='' disabled>Please Select...</option>
          <option value='Healthy'>Healthy</option>
          <option value='High-Cholesterol'>Elevated Cholesterol</option>
          <option value='Diabetes'>Diabetic</option>
          <option value='Obesity'>Obese</option>
        </select>

        <h4> Diet Recommendation:</h4>
        <select
          className='input-wizard'
          value={dietRecommendation}
          name='dietRecommendation'
          onChange={onChange}
        >
          <option value='' disabled>Please Select...</option>
          <option value='Balanced'>Balanced</option>
          <option value='High-Protein'>High-Protein</option>
          <option value='Low-Carb'>Low-Carb</option>
          <option value='Low-Fat'>Low-Fat</option>
        </select>

        <h4> Diet Restriction:</h4>
        <select
          className='input-wizard'
          value={dietRestriction}
          name='dietRestriction'
          onChange={onChange}
        >
          <option value='' disabled>Please Select...</option>
          <option value=''>None</option>
          <option value='Gluten-Free'>Gluten-Free</option>
          <option value='Low-Sugar'>Low-Sugar</option>
          <option value='Vegan'>Vegan</option>
        </select>
      </form>
    </div>
  );
};

export default StepThree;
