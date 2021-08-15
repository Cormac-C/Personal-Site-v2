import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, Container, Button } from "react-bootstrap";

export default class NavBar extends Component {
    render(){
        return(
            <div>
                <Navbar collapseOnSelect bg="light" expand="sm" fixed="top">
                    <Container>
                        <NavbarBrand> Cormac </NavbarBrand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/projects">Projects</Nav.Link>
                                <Button href="/contact">
                                    Contact
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}