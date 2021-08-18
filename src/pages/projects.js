import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ProjectCard from "../components/projectCard";

const ProjectsPage = () => {
  return (
    <main>
      <title>Projects | Cormac</title>
      <NavBar />
      <Container className="body">
        <Row className="sectionTitle">
          <h1> Projects </h1>
        </Row>
        <Row>
          <p> This page is under construction, check back in soon! </p>
        </Row>
        <Row>
          <Col>
            <ProjectCard />
          </Col>
          <Col>
            <ProjectCard />
          </Col>
        </Row>
      </Container>
      <Footer />
    </main>
  );
};

export default ProjectsPage;
