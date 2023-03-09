import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions'


function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }
  
  return (
    <header>
    <Navbar bg="light" varient = "dark" expand="lg" collapseOnSelect>

      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Three-Swifty-Five</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

          {/* to = is where the link will bring you to (without reloading the page) */}

          <LinkContainer to='/cart'>
            <Nav.Link> Completed Aventures </Nav.Link>
          </LinkContainer>

          { userInfo ? (
            <NavDropdown title={userInfo.name} id='username'>
              {/* <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer> */}

              <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

            </NavDropdown>
          ) : (
            
            <LinkContainer to='/login'>
            <Nav.Link> Login </Nav.Link>
            </LinkContainer>

          )}
          



          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
    </header>
  )
}

export default Header