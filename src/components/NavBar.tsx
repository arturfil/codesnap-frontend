import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="background">
        <Container>
          <Navbar.Brand >
            <Link to="/" className="brand">
              Code Snap
            </Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="link" to="/">
                Home
              </Link>
              <NavDropdown title="Posts" id="collasible-nav-dropdown">
                <NavDropdown.Item className="link" >
                  <Link className="link" to="/createPost">
                    Create Post
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >Another action</NavDropdown.Item>
                <NavDropdown.Item >Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link >Sign In</Nav.Link>
              <Nav.Link eventKey={2} >
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
