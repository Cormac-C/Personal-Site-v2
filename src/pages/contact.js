import * as React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavBar from "../components/navbar";

const ContactPage = () => {
  return (
    <main>
      <title>Contact | Cormac</title>
      <NavBar />
      <Container className="body">
        <Row>
          <h1> Contact </h1>
        </Row>
        <Row>
          <p>
            {" "}
            Conversations are great. Please reach out if you’d like to discuss
            opportunities for collaboration, ask a question about one of my
            projects, or generally discuss something interesting happening in
            the world.{" "}
          </p>
        </Row>
        <Row>
          <Col className="justify-content-center col-4" align="center">
            <Button>Email</Button>
          </Col>
          <Col className="justify-content-center col-4" align="center">
            <Button>Github</Button>
          </Col>
          <Col className="justify-content-center col-4" align="center">
            <Button>Linkedin</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ContactPage;
