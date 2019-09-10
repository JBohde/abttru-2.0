import React, { Component } from 'react';
import Input from '../../Input/Input';
import { Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
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
        <Row>
        <Col xs={0} sm={0} md={4} lg={4} />
          <Col xs={12} sm={12} md={4} lg={4}>
            <Logo />
          </Col>
          <Col xs={0} sm={0} md={4} lg={4} />
        </Row>
        <Row>
          <form>
            <Row>
            <Col xs={0} sm={0} md={3} lg={4} />
            <Col xs={12} sm={12} md={6} lg={4}>
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
              <Col xs={0} sm={0} md={3} lg={4} />
            </Row>
          </form>
        </Row>
      </div>
    );
  }
}

export default UserLogin;
