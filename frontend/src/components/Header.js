import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
    <Navbar bg="light" varient = "dark" expand="lg" collapseOnSelect>

      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Tailoring Swiftly</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

          {/* to = is where the link will bring you to (without reloading the page) */}

          <LinkContainer to='/cart'>
            <Nav.Link> Cart </Nav.Link>
          </LinkContainer>

          <LinkContainer to='/login'>
            <Nav.Link> Login </Nav.Link>
          </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
    </header>
  )
}

export default Header