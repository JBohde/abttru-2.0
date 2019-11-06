import React from 'react';

const StepOne = props => {
  const { firstName, lastName, email, password, userPhoto, onChange } = props;
  return (
    <div className='steppy'>
      <form className='form-wizard'>
        <h3>First Name:</h3>
        <input
          className='input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12'
          type='text'
          name='firstName'
          placeholder='First Name'
          value={firstName}
          onChange={onChange}
        />
        <br />
        <br />
        <h3>Last Name:</h3>
        <input
          className='input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12'
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={lastName}
          onChange={onChange}
        />
        <br />
        <br />
        <h3>Email:</h3>
        <input
          className='input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12'
          type='text'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
        <br />
        <br />
        <h3>Password:</h3>
        <input
          className='input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12'
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
        />
        <br />
        <br />
        <h3>Link to photo:</h3>
        <input
          className='input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12'
          type='text'
          name='userPhoto'
          placeholder='Link to photo url...'
          value={userPhoto}
          onChange={onChange}
        />
        <br />
        <br />
      </form>
    </div>
  );
};

export default StepOne;
