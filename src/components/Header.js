import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';

const NavItem = ({ to, children }) => (
  <li>
    <Link to={to} children={children} />
  </li>
);

const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">contacts-react-app</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem to="/contacts">Contacts</NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;