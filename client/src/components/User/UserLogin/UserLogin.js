import React, { Component } from 'react';
import Input from '../../Input/Input';
import { Row, Col } from '../../Grid';
import { Button } from 'reactstrap';
import Logo from '../../Home/Logo/Logo';
import axios from 'axios';
import './UserLogin.css';

const logStyle = {
  textAlign: 'center',
};

class UserLogin extends Component {
  state = {
    dietRecommendation: '',
    dietRestriction: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    recipes: [],
    riskFactor: '',
    _id: '',
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    axios.post(`/api/abttru/userLogin`, this.state).then(res => {
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
      <div>
        <div className="row">
          <div className="col-4 col-sm-4 col-md-4 col-lg-4" />
          <Logo className="col-4 col-sm-4 col-md-4 col-lg-4" />
          <div className="col-4 col-sm-4 col-md-4 col-lg-4" />
        </div>
        <form>
          <Row>
            <Col size="xs-0 sm-0 md-4 lg-4" />
            <Col size="xs-12 sm-12 md-4 lg-4">
              <Input
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Enter 'bohdecoded@gmail.com'"
              />
              <br />
              <Input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                placeholder="Enter 'password'"
              />
              <br />
              <Button
                type="submit"
                onClick={this.handleFormSubmit}
                style={logStyle}
                className="btn-lg login"
              >
                Login
              </Button>
            </Col>
            <Col size="xs-0 sm-0 md-4 lg-4" />
          </Row>
        </form>
      </div>
    );
  }
}

export default UserLogin;
