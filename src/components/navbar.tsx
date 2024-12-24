import React from "react";
import { Navbar, NavbarBrand, Nav, Container, Button } from "react-bootstrap";

const NavBar: React.FC = () => {
  return (
    <div>
      <Navbar
        className="shadow-sm text-2xl"
        collapseOnSelect
        bg="white"
        expand="md"
        fixed="top"
      >
        <Container>
          <NavbarBrand
            href="/"
            className="!text-theme-blue hover:!text-theme-blue-accent !text-5xl !leading-[4.5rem] p-0 font-black"
          >
            CC
          </NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-end">
            <Nav>
              <Nav.Link href="/about" className="mx-10">
                About
              </Nav.Link>
              <Nav.Link href="/projects" className="mx-10">
                Projects
              </Nav.Link>
              <Button
                className="!bg-theme-blue hover:!bg-theme-blue-accent text-white !text-2xl mx-10"
                variant="nav"
                href="/contact"
              >
                Contact
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
