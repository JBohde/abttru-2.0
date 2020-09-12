import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Carousel from '../../components/Carousel';

import Logo from '../../components/Logo';

import './Guest.css';

class Guest extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={4} />
          <Col xs={4}>
            <Logo className='text-center' />
          </Col>
          <Col xs={4} />
        </Row>
        <Carousel pathName={this.props.match.path} className='guest-carousel' />
      </Container>
    );
  }
}

export default Guest;
