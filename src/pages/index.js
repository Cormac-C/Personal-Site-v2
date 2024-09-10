import * as React from "react";
import NavBar from "../components/navbar";
import { Col, Row, Button, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./format.css";

const IndexPage = () => {
  return (
    <main>
      <title>Home | Cormac</title>
      <NavBar />
      <Container className="landing body gy-4">
        <Row xs={1} md={2} className="align-items-center gy-5">
          <Col md={7}>
            <div className="landingTitle">
              <h1> Cormac Cureton </h1>
            </div>
            <div className="landingSubTitle">
              <p> AI Researcher | Engineer </p>
            </div>
          </Col>
          <Col
            md={5}
            className="justify-content-center align-center"
            align="center"
          >
            <div className="headshot">
              <StaticImage
                src="../images/face.jpg"
                alt="Headshot"
                placeholder="blurred"
              />
            </div>
          </Col>
        </Row>
        <Row xs={1} md={3} className="topMargin">
          <Col align="center">
            <Button href="/projects">
              <div className="d-flex flex-row justify-content-around">
                <StaticImage
                  className="buttonIcon"
                  src="../images/codeIcon.svg"
                  alt="Code Icon"
                  placeholder="blurred"
                  layout="fixed"
                  height={30}
                />
                <span>View Projects</span>
              </div>
            </Button>
          </Col>
          <Col align="center">
            <Button variant="outline-primary" href="/lite">
              <div className="d-flex flex-row justify-content-around">
                <span>Research Site</span>
              </div>
            </Button>
          </Col>
          <Col align="center">
            <Button variant="outline-primary" href="/about">
              <div className="d-flex flex-row justify-content-around">
                <StaticImage
                  className="buttonIcon"
                  src="../images/profileIcon.svg"
                  alt="Profile Icon"
                  placeholder="blurred"
                  layout="fixed"
                  height={30}
                />
                <span>About Me</span>
              </div>
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default IndexPage;
