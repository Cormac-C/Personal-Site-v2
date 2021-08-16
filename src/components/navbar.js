import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, Container, Button } from "react-bootstrap";
import "./navbar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect bg="white" expand="md" fixed="top">
          <Container>
            <NavbarBrand href="/"> CC </NavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Button variant="nav" href="/contact">
                  Contact
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
