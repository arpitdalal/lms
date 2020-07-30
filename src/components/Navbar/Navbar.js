import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from '../BootstrapWrap';
import './Navbar.css';

const NavbarWrap = ({ setIsAuthenticated }) => {
  return (
    <React.Fragment>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='mr-auto'>
          <Link to='/'>Home</Link>
          <Link to='/course'>Course</Link>
          <Link to='/student'>Student</Link>
        </Nav>
        <Nav.Link
          href='#'
          style={{ color: 'white' }}
          onClick={() => {
            document.cookie = 'loggedin=false';
            setIsAuthenticated(false);
          }}
        >
          Logout
        </Nav.Link>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarWrap;
