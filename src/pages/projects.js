import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/navbar";
import ProjectCard from "../components/projectCard";
import Footer from "../components/footer";

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
          <Col>
            <ProjectCard
              project={{
                title: "Project Name",
                subtitle: "Tech · Stack · Info",
                description: "This is a brief description of the project",
                imagesrc: "../images/icon.png",
              }}
            />
          </Col>
          <Col>
            <ProjectCard
              project={{
                title: "Project Name",
                subtitle: "Tech · Stack · Info",
                description: "This is a brief description of the project",
                imagesrc: "../images/icon.png",
              }}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </main>
  );
};

export default ProjectsPage;
