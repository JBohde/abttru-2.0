import React from 'react';
import { Col } from 'reactstrap';
import { RingLoader } from 'react-spinners';

export default function Spinner({ isLoading }) {
  return (
    <Col xs={{ size: 6, offset: 3 }}>
      <div className='ring-loader'>
        <RingLoader loading={isLoading} size={100} color={'#E91547'} />
      </div>
    </Col>
  );
}
