import * as React from "react";
import NavBar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import "./format.css";
import Footer from "../components/footer";

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
                layout="fixed"
                width={300}
                height={300}
              />
            </div>
          </Col>
          <Col className="justify-content-center col-6" align="center">
            <Button href="/projects">View Projects</Button>
          </Col>
          <Col className="justify-content-center col-6" align="center">
            <Button variant="outline-primary" href="/about">
              About Me
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </main>
  );
};

export default IndexPage;
