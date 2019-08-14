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
    <div className="steppy">
      <br />
      <br />
      <form>
        <h3>Blood Pressure: Systolic</h3>
        <select
          className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12"
          value={bpSystolic}
          name="bpSystolic"
          onChange={onChange}
        >
          <option value="" disabled>
            Systolic
          </option>
          <option value="Normal">Less than 120 mmHg</option>
          <option value="At Risk">120-139 mmHg</option>
          <option value="High Risk">140 mmHg +</option>
        </select>

        <br />
        <br />
        <h3>Blood Pressure: Diastolic</h3>
        <select
          className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12"
          value={bpDiastolic}
          name="bpDiastolic"
          onChange={onChange}
        >
          <option value="" disabled>
            Diastolic
          </option>
          <option value="Normal">Less than 80 mmHg</option>
          <option value="At Risk">80-89 mmHg</option>
          <option value="High Risk">90 mmHg +</option>
        </select>

        <br />
        <br />

        <h3>Health Risk Factor:</h3>
        <select
          className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12"
          value={riskFactor}
          name="riskFactor"
          onChange={onChange}
        >
          <option value="" disabled>
            Please Select...
          </option>
          <option value="Healthy">Healthy</option>
          <option value="High-Cholesterol">Elevated Cholesterol</option>
          <option value="Diabetes">Diabetic</option>
          <option value="Obesity">Obese</option>
        </select>

        <br />
        <br />

        <h3> Diet Recommendation:</h3>
        <select
          className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12"
          value={dietRecommendation}
          name="dietRecommendation"
          onChange={onChange}
        >
          <option value="" disabled>
            Please Select...
          </option>
          <option value="Balanced">Balanced</option>
          <option value="High-Protein">High-Protein</option>
          <option value="Low-Carb">Low-Carb</option>
          <option value="Low-Fat">Low-Fat</option>
        </select>

        <br />
        <br />

        <h3> Diet Restriction:</h3>
        <select
          className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12"
          value={dietRestriction}
          name="dietRestriction"
          onChange={onChange}
        >
          <option value="" disabled>
            Please Select...
          </option>
          <option value="">None</option>
          <option value="Gluten-Free">Gluten-Free</option>
          <option value="Low-Sugar">Low-Sugar</option>
          <option value="Vegan">Vegan</option>
        </select>

        <br />
        <br />
      </form>
    </div>
  );
};

export default StepThree;
