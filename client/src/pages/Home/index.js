import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserMd } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../components/Logo';
import './Home.css';

class Home extends React.Component {
  state = {};

  render() {
    return (
      <div className='login-wrapper'>
        <Logo />
        <Button className='home-buttons'>
          <h3>
            <Link to='/login/user' className='login-link'>
              <FontAwesomeIcon icon={faUser} className='login-icon' />
              Patient Login
            </Link>
          </h3>
        </Button>
        <Button className='home-buttons'>
          <h3>
            <Link to='/login/doctor' className='login-link'>
              <FontAwesomeIcon
                icon={faUserMd}
                color='#FFFFFF'
                className='login-icon'
              />
              Doctor Login
            </Link>
          </h3>
        </Button>
        <Button className='home-buttons'>
          <h3>
            <Link to='/guest' className='login-link'>
              <FontAwesomeIcon icon={faUser} className='login-icon' />
              Guest
            </Link>
          </h3>
        </Button>
      </div>
    );
  }
}

export default Home;
