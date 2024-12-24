import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { Seo } from "../components/seo";
import NavBar from "../components/navbar";
import ProjectCard from "../components/projectCard";
import Footer from "../components/footer";

const ProjectsPage: React.FC = ({ data }: any) => {
  return (
    <main>
      <title>Projects | Cormac</title>
      <NavBar />
      <Container className="mt-32 min-h-body-min">
        <Row className="w-min whitespace-nowrap mb-8">
          <h1 className="font-[calc(1.75rem+1.5vw)] after:content-[''] after:block after:w-full after:h-2 after:bg-theme-blue after:left-0 after:rounded-lg">
            {" "}
            Projects{" "}
          </h1>
        </Row>
        <Row xs={1} md={1} lg={2} className="g-4">
          {data.allMdx.nodes.map((node: any) => (
            <Col key={node.id}>
              <ProjectCard
                key={node.id}
                project={{
                  title: node.frontmatter.title,
                  subtitle: node.frontmatter.tech,
                  description: node.frontmatter.blurb,
                  image: node.frontmatter.hero_image,
                  link: node.frontmatter.slug,
                  endDate: node.frontmatter.endDate
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
          endDate
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

export const Head = () => <Seo />;
