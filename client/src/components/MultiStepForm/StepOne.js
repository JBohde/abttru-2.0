import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

const StepOne = props => {
  const {
    firstName = '',
    lastName = '',
    email = '',
    password = '',
    userPhoto = '',
    onChange,
  } = props;
  return (
    <div className='step'>
      <Form>
        <FormGroup>
          <Label for='email'>First Name</Label>
          <Input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={firstName}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='email'>Last Name</Label>
          <Input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='email'>Password</Label>
          <Input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='email'>Link to Photo</Label>
          <Input
            type='text'
            name='userPhoto'
            placeholder='Link to photo url...'
            value={userPhoto}
            onChange={onChange}
          />
        </FormGroup>
      </Form>
    </div>
  );
};

export default StepOne;
