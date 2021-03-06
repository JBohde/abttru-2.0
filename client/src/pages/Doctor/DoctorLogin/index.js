import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import Logo from '../../../components/Logo';

const logStyle = {
  textAlign: 'center',
};

class DoctorLogin extends Component {
  state = {
    email: [],
    password: [],
    doctorId: '',
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its
    // default behavior, get recipes update the recipes state
    event.preventDefault();
    axios.post('/api/abttru/login/doctor', this.state).then(res => {
      if (res.data == null) {
        this.props.history.push('/login/doctor');
      } else {
        const id = res.data._id;
        this.setState({ _id: id });
        this.props.history.push(`/doctor/${id}`);
      }
    });
  };

  render() {
    return (
      <div className='login-wrapper'>
        <Logo />
        <Form className='login-form' onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input
              name='email'
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Enter 'doogie@gmail.com'"
            />
          </FormGroup>
          <FormGroup>
            <Label for='email'>Password</Label>
            <Input
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="Enter 'password'"
            />
          </FormGroup>
          <Button
            type='submit'
            onClick={this.handleFormSubmit}
            style={logStyle}
            size='lg'
            className='login'
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default DoctorLogin;
