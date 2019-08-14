import React from 'react';

const StepThree = props => (
  <div>
    <br />
    <br />
    <form>
      <div className="bp-main-div">
        <div className="bp-label">
          <label>Blood Pressure: {'  '}</label>
        </div>

        {'  '}
        <br />
        <div className="bp-div">
          <span>
            <label>
              <select
                value={props.systolic}
                name="systolic"
                onChange={props.onChange}
              >
                <option value="" disabled>
                  Systolic
                </option>
                <option value="Normal">Less than 120 mmHg</option>
                <option value="At Risk">120-139 mmHg</option>
                <option value="High Risk">140 mmHg +</option>
              </select>
            </label>
          </span>
          {'  '}
          <br />
          <span>
            <label>
              <select
                value={props.diastolic}
                name="diastolic"
                onChange={props.onChange}
              >
                <option value="" disabled>
                  Diastolic
                </option>
                <option value="Normal">Less than 80 mmHg</option>
                <option value="At Risk">80-89 mmHg</option>
                <option value="High Risk">90 mmHg +</option>
              </select>
            </label>
          </span>
        </div>
      </div>
      <br />
      <br />

      <label>
        Health Risk Factor: {'  '}
        <select
          value={props.healthRiskFactor}
          name="healthRiskFactor"
          onChange={props.onChange}
        >
          <option value="" disabled>
            Please Select...
          </option>
          <option value="Healthy">Healthy</option>
          <option value="High-Cholesterol">Elevated Cholesterol</option>
          <option value="Diabetes">Diabetic</option>
          <option value="Obesity">Obese</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        Diet Recommendation: {'  '}
        <select
          value={props.dietRecommendation}
          name="dietRecommendation"
          onChange={props.onChange}
        >
          <option value="" disabled>
            Please Select...
          </option>
          <option value="Balanced">Balanced</option>
          <option value="High-Protein">High-Protein</option>
          <option value="Low-Carb">Low-Carb</option>
          <option value="Low-Fat">Low-Fat</option>
        </select>
      </label>
      <br />
      <br />
    </form>
  </div>
);

export default StepThree;
