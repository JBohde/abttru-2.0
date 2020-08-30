import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

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
    <div className='step'>
      <Form>
        <FormGroup>
          <Label for='bpSystolic'>Blood Pressure: Systolic</Label>
          <Input
            type='select'
            className='custom-select'
            value={bpSystolic}
            name='bpSystolic'
            onChange={onChange}
          >
            <option value='' disabled>
              Systolic
            </option>
            <option value='Normal'>Less than 120 mmHg</option>
            <option value='At Risk'>120-139 mmHg</option>
            <option value='High Risk'>140 mmHg +</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='bpDiastolic'>Blood Pressure: Diastolic</Label>
          <Input
            type='select'
            className='custom-select'
            value={bpDiastolic}
            name='bpDiastolic'
            onChange={onChange}
          >
            <option value='' disabled>
              Diastolic
            </option>
            <option value='Normal'>Less than 80 mmHg</option>
            <option value='At Risk'>80-89 mmHg</option>
            <option value='High Risk'>90 mmHg +</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='riskFactor'>Health Risk Factor</Label>
          <Input
            type='select'
            className='custom-select'
            value={riskFactor}
            name='riskFactor'
            onChange={onChange}
          >
            <option value='' disabled>
              Please Select...
            </option>
            <option value='Healthy'>Healthy</option>
            <option value='High-Cholesterol'>Elevated Cholesterol</option>
            <option value='Diabetes'>Diabetic</option>
            <option value='Obesity'>Obese</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='dietRecommendation'>Diet Recommendation</Label>
          <Input
            type='select'
            className='custom-select'
            value={dietRecommendation}
            name='dietRecommendation'
            onChange={onChange}
          >
            <option value='' disabled>
              Please Select...
            </option>
            <option value='Balanced'>Balanced</option>
            <option value='High-Protein'>High-Protein</option>
            <option value='Low-Carb'>Low-Carb</option>
            <option value='Low-Fat'>Low-Fat</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='dietRestriction'>Diet Restriction</Label>
          <Input
            type='select'
            className='custom-select'
            value={dietRestriction}
            name='dietRestriction'
            onChange={onChange}
          >
            <option value='' disabled>
              Please Select...
            </option>
            <option value='None'>None</option>
            <option value='Gluten-Free'>Gluten-Free</option>
            <option value='Low-Sugar'>Low-Sugar</option>
            <option value='Vegan'>Vegan</option>
          </Input>
        </FormGroup>
      </Form>
    </div>
  );
};

export default StepThree;
