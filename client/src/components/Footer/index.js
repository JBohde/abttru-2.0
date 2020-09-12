/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const logoStyle = {
  width: '75px',
  height: 'auto',
  margin: '5px 5px 15px 5px',
  cssFloat: 'left',
};

const Footer = () => (
  <div className='footer'>
    <Row>
      <Col xs={12} md={4} className='about'>
        <img
          className='brand'
          src={require('./icons/abttru-logo2.png')}
          style={logoStyle}
          alt='logo'
        />
        <p className='mission'>
          Our application was created with a passion for food and connects you
          to recipes from all over the web, and helps your dietitian convey
          their recommendations to you dynamically. You pick the ingredients, we
          make a better you.
        </p>
      </Col>
      <Col xs={6} md={2} className='text-center'>
        <h5 style={{ marginBottom: '0.25rem' }}> Resources </h5>
        <a
          href='https://github.com/a-better-you-2/abttru-2.0#abttru-20'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} size={'3x'} className='icon' />
        </a>
      </Col>
      <Col xs={6} md={2} className='text-center'>
        <h5> Navigation </h5>
        <ul className='list-unstyled quick-links'>
          <li>
            <h3>
              <Link to='/login/doctor'>
                <FontAwesomeIcon icon={faUserMd} className='icon' />{' '}
              </Link>
              <Link to='/login/user'>
                <FontAwesomeIcon icon={faUser} className='icon' />
              </Link>
            </h3>
          </li>
        </ul>
      </Col>
      <Col xs={12} md={4}>
        <div className='hermanos'>
          <h5 style={{ marginBottom: 0 }}>Connect with our team!</h5>
          <a
            href='https://github.com/a-vargasmarte'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='bitmoji'
              src={require('./icons/bitmojiAlberto.png')}
              alt='bitmoji of alberto'
            />
          </a>
          <a
            href='https://github.com/JBohde'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='bitmoji'
              src={require('./icons/bitmojiJoshua2.png')}
              alt='bitmoji of joshua'
            />
          </a>
          <a
            href='https://github.com/DaveyStacks'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='bitmoji'
              src={require('./icons/bitmojiDavey.png')}
              alt='bitmoji of davey'
            />
          </a>
        </div>
      </Col>
    </Row>
  </div>
);

export default Footer;
