import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import Logo from '../../Home/Logo/Logo';
import axios from 'axios';

const logStyle = {
  textAlign: 'center',
};

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
    axios.post(`/api/abttru/userlogin`, this.state).then(res => {
      console.log('response!!', res)
      if (res.data == null) {
        this.props.history.push('/userLogin');
      } else {
        let id = res.data._id;
        this.setState({
          _id: id,
        });
        this.props.history.push(`/user/${id}`);
      }
    });
  };

  render() {
    return (
      <div className='login-wrapper'>
        <Logo />
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Input
              name='email'
              type='email'
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Enter 'bohdecoded@gmail.com'"
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

export default UserLogin;
