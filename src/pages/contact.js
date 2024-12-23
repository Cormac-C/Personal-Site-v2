import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Seo } from "../components/seo";
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
          <p> Don't hesitate to reach out </p>
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
                placeholder="dominantColor"
                loading="eager"
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
                placeholder="dominantColor"
                loading="eager"
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
                placeholder="dominantColor"
                loading="eager"
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

export const Head = () => <Seo />;
