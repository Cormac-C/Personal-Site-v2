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
      <Container className="landing body">
        <Row className="align-items-center gy-5">
          <Col className="col-7">
            <div className="landingTitle">
              <h1> Cormac Cureton </h1>
            </div>
            <div className="landingSubTitle">
              <p> Learner | Designer | Developer </p>
              <p> Seeking opportunities to make a positive impact and grow </p>
            </div>
          </Col>
          <Col
            className="justify-content-center align-center col-5"
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
          <Col className="col-6" align="center">
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
          <Col className="col-6" align="center">
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
