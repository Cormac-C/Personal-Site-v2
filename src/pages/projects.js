import * as React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/navbar";
import ProjectCard from "../components/projectCard";
import Footer from "../components/footer";

const ProjectsPage = ({ data }) => {
  return (
    <main>
      <title>Projects | Cormac</title>
      <NavBar />
      <Container className="body">
        <Row className="sectionTitle">
          <h1> Projects </h1>
        </Row>
        <Row xs={1} md={2} className="g-4">
          {data.allMdx.nodes.map((node) => (
            <Col key={node.id}>
              <ProjectCard
                key={node.id}
                project={{
                  title: node.frontmatter.title,
                  subtitle: node.frontmatter.tech,
                  description: node.frontmatter.blurb,
                  imagesrc: "../images/icon.png",
                  link: node.frontmatter.slug,
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </main>
  );
};
export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          tech
          blurb
          slug
        }
        id
        body
      }
    }
  }
`;

export default ProjectsPage;
