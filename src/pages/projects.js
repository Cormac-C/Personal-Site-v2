import * as React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col, Alert } from "react-bootstrap";
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
        <Alert variant={"info"}>
          These projects were created between 2019 and 2023 as I was learning to
          become a software developer. While they don't all meet the level of
          quality I would expect from myself today, they still hold value as a
          record of my learning process over time. I'm excited to add new
          projects that showcase my current skills and interests in the near
          future.
        </Alert>
        <Row xs={1} md={1} lg={2} className="g-4">
          {data.allMdx.nodes.map((node) => (
            <Col key={node.id}>
              <ProjectCard
                key={node.id}
                project={{
                  title: node.frontmatter.title,
                  subtitle: node.frontmatter.tech,
                  description: node.frontmatter.blurb,
                  image: node.frontmatter.hero_image,
                  link: node.frontmatter.slug
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
    allMdx(
      sort: { frontmatter: { endDate: DESC } }
      filter: { frontmatter: { hide: { eq: "false" } } }
    ) {
      nodes {
        frontmatter {
          title
          tech
          blurb
          slug
          hero_image {
            childrenImageSharp {
              gatsbyImageData(height: 180, layout: CONSTRAINED)
            }
          }
          hero_image_alt
          endDate
          hide
        }
        id
        body
      }
    }
  }
`;

export default ProjectsPage;
