// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/NavBar.css';

const NavbarComponents = () => {
    return (
      <Navbar bg='light' expand="lg">
        <Container className='navbar-container'>
          <Nav className="navbar-links">
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#skills'>Skills</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  };

export default NavbarComponents;
