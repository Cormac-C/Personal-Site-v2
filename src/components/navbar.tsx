import React from "react";
import { Navbar, NavbarBrand, Nav, Container, Button } from "react-bootstrap";
import { motion } from "motion/react";

const NavBar: React.FC = () => {
  const HOVER_SCALE = 1.05;
  const TAP_SCALE = 0.95;

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
            <motion.div
              whileHover={{ scale: HOVER_SCALE }}
              whileTap={{ scale: TAP_SCALE }}
            >
              CC
            </motion.div>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-end">
            <Nav>
              <Nav.Link href="/about" className="md:mx-10">
                <motion.div
                  whileHover={{ scale: HOVER_SCALE }}
                  whileTap={{ scale: TAP_SCALE }}
                >
                  About
                </motion.div>
              </Nav.Link>
              <Nav.Link href="/projects" className="md:mx-10">
                <motion.div
                  whileHover={{ scale: HOVER_SCALE }}
                  whileTap={{ scale: TAP_SCALE }}
                >
                  Projects{" "}
                </motion.div>
              </Nav.Link>
              <motion.div
                whileHover={{ scale: HOVER_SCALE }}
                whileTap={{ scale: TAP_SCALE }}
              >
                <Button
                  className="!bg-theme-blue hover:!bg-theme-blue-accent text-white !text-2xl md:mx-10"
                  variant="nav"
                  href="/contact"
                >
                  Contact
                </Button>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
