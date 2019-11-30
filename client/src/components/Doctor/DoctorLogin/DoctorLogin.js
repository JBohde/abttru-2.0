import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import Logo from '../../Home/Logo/Logo';
import axios from 'axios';

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
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    axios.post(`/api/abttru/doctorlogin`, this.state).then(res => {
      if (res.data == null) {
        this.props.history.push('/doctorLogin');
      } else {
        let id = res.data._id;
        this.setState({ _id: id });
        this.props.history.push(`/doctor/${id}`);
      }
    });
  };

  render() {
    return (
      <div className='login-wrapper'>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Logo />
            <Input
              name='email'
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Enter 'doogie@gmail.com'"
            />
            <Input
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="Enter 'password'"
            />
            <Button
              type='submit'
              onClick={this.handleFormSubmit}
              style={logStyle}
              className='btn-lg login'
            >
              Login
          </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default DoctorLogin;
