import React, { Component } from 'react';
import Input from '../../Input/Input';
import { Row, Col } from '../../Grid';
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
    axios.post(`/api/abttru/doctorLogin`, this.state).then(res => {
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
      <div>
        <Row>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
          <Logo className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
        </Row>
        <Row>
          <form>
            <Row>
              <Col size="xs-0 sm-0 md-4 lg-4" />
              <Col size="xs-12 sm-12 md-4 lg-4">
                <Input
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  placeholder="Enter 'doogie@gmail.com'"
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
                <button
                  type="submit"
                  onClick={this.handleFormSubmit}
                  style={logStyle}
                  className="btn-lg login"
                >
                  Login
                </button>
              </Col>
              <Col size="xs-0 sm-0 md-4 lg-4" />
            </Row>
          </form>
        </Row>
      </div>
    );
  }
}

export default DoctorLogin;
