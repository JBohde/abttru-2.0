import React from 'react';

const StepTwo = props => (
  <div>
    {/* <br /> */}
    {/* <br /> */}
    <form>
      <label>
        Date of Birth: {'  '}
        <input
          type="date"
          name="dateOfBirth"
          placeholder="DOB"
          value={props.dateOfBirth}
          onChange={props.onChange}
        />
      </label>
      <br />
      <br />
      <label>
        Sex: {'  '}
        <select value={props.sex} name="sex" onChange={props.onChange}>
          <option value="" disabled />
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        Height: {'  '}
        <select
          name="heightFoot"
          placeholder="Height"
          value={props.heightFoot}
          onChange={props.onChange}
        >
          <option value="3">3'</option>
          <option value="4">4'</option>
          <option value="5">5'</option>
          <option value="6">6'</option>
          <option value="7">7'</option>
        </select>
        {'    '}
        <select
          name="heightInch"
          placeholder="Height"
          value={props.heightInch}
          onChange={props.onChange}
        >
          <option value="0">0"</option>
          <option value="1">1"</option>
          <option value="2">2"</option>
          <option value="3">3"</option>
          <option value="4">4"</option>
          <option value="5">5"</option>
          <option value="6">6"</option>
          <option value="7">7"</option>
          <option value="8">8"</option>
          <option value="9">9"</option>
          <option value="10">10"</option>
          <option value="11">11"</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        Weight:{'  '}
        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={props.weight}
          onChange={props.onChange}
        />
        {'  '} lbs
      </label>
      <br />
      <br />
      <label>
        Waist Measurement: {'  '}
        <select
          name="waistMeas"
          placeholder="Waist Measurement"
          value={props.waistMeas}
          onChange={props.onChange}
        >
          <option value="24">24"</option>
          <option value="25">25"</option>
          <option value="26">26"</option>
          <option value="27">27"</option>
          <option value="28">28"</option>
          <option value="29">29"</option>
          <option value="30">30"</option>
          <option value="31">31"</option>
          <option value="32">32"</option>
          <option value="33">33"</option>
          <option value="34">34"</option>
          <option value="35">35"</option>
          <option value="36">36"</option>
          <option value="37">37"</option>
          <option value="38">38"</option>
          <option value="39">39"</option>
          <option value="40">40"</option>
          <option value="41">41"</option>
          <option value="42">42"</option>
          <option value="43">43"</option>
          <option value="44">44"</option>
          <option value="45">45"</option>
          <option value="46">46"</option>
          <option value="47">47"</option>
          <option value="48">48"</option>
          <option value="49">49"</option>
          <option value="50">50"</option>
          <option value="51">50" +</option>
        </select>
      </label>
      <br />
      <br />
    </form>
  </div>
);

export default StepTwo;
