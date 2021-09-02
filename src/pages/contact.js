import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { StaticImage } from "gatsby-plugin-image";

const ContactPage = () => {
  return (
    <main>
      <title>Contact | Cormac</title>
      <NavBar />
      <Container className="body">
        <Row className="sectionTitle">
          <h1> Contact </h1>
        </Row>
        <Row className="mainText">
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
            <a
              href="mailto: cormaccureton@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/email.svg"
                alt="Email Icon"
                placeholder="blurred"
                layout="fixed"
                width={100}
                height={100}
              />
            </a>
          </Col>
          <Col className="justify-content-center col-4" align="center">
            <a
              href="https://github.com/Cormac-C"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/github.svg"
                alt="Github Icon"
                placeholder="blurred"
                layout="fixed"
                width={100}
                height={100}
              />
            </a>
          </Col>
          <Col className="justify-content-center col-4" align="center">
            <a
              href="https://www.linkedin.com/in/cormaccureton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/linkedin.svg"
                alt="Linkedin Icon"
                placeholder="blurred"
                layout="fixed"
                width={100}
                height={100}
              />
            </a>
          </Col>
        </Row>
      </Container>
      <Footer />
    </main>
  );
};

export default ContactPage;
