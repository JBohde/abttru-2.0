import React from 'react';

const StepOne = props => (
  <div>
    <br />
    <br />
    <form>
      <label>
        First Name:{'  '}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.firstName}
          onChange={props.onChange}
        />
      </label>
      <br />
      <br />
      <label>
        Last Name:{'  '}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={props.lastName}
          onChange={props.onChange}
        />
      </label>
      <br />
      <br />
      <label>
        Email:{'  '}
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={props.email}
          onChange={props.onChange}
        />
      </label>
      <br />
      <br />
      <label>
        Password:{'  '}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={props.password}
          onChange={props.onChange}
        />
      </label>
      <br />
      <br />
    </form>
  </div>
);

export default StepOne;
