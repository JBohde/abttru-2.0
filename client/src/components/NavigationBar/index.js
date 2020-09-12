import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './Nav.css';

const logoStyle = {
  width: '50px',
  height: 'auto',
};

const NavigationBar = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color='faded' dark>
      <NavbarBrand href='/' className='mr-auto'>
        <img src={require('./abttru-logo2.png')} style={logoStyle} alt='logo' />
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className='mr-2' />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href='/'>
              <FontAwesomeIcon icon={faHome} className='mr-2' /> HOME
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
