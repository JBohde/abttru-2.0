import React from 'react';

const StepOne = props => {
  const {
    firstName,
    lastName,
    email,
    password,
    userPhoto,
    onChange,
  } = props;
  return (
    <div className='steppy'>
      <form className='form-wizard'>
        <h4>First Name:</h4>
        <input
          className='input-wizard'
          type='text'
          name='firstName'
          placeholder='First Name'
          value={firstName}
          onChange={onChange}
        />
        <h4>Last Name:</h4>
        <input
          className='input-wizard'
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={lastName}
          onChange={onChange}
        />
        <h4>Email:</h4>
        <input
          className='input-wizard'
          type='text'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
        <h4>Password:</h4>
        <input
          className='input-wizard'
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
        />
        <h4>Link to photo:</h4>
        <input
          className='input-wizard'
          type='text'
          name='userPhoto'
          placeholder='Link to photo url...'
          value={userPhoto}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default StepOne;
