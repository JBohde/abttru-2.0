import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import Logo from '../../../components/Logo';

class UserLogin extends Component {
  state = {
    email: '',
    password: '',
    id: '',
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    axios
      .post('/api/abttru/login/user', this.state)
      .then(res => {
        if (res.data == null) {
          this.props.history.push('/login/user');
        } else {
          const id = res.data._id;
          this.setState({
            _id: id,
          });
          this.props.history.push(`/user/${id}`);
        }
      })
      .catch(err => console.log('{{{ there is an error }}}', err));
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
              type='email'
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Enter 'bohdecoded@gmail.com'"
            />
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="Enter 'password'"
            />
          </FormGroup>
          <div>
            <Button
              className='login'
              type='submit'
              onClick={this.handleFormSubmit}
              size='lg'
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default UserLogin;
