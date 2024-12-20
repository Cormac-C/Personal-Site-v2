import * as React from "react";
import { graphql } from "gatsby"; // highlight-line
import { Container, Row, Alert } from "react-bootstrap";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { Seo } from "../../components/seo";
import { isProjectOutdated } from "../../utils";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const Project = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image.childrenImageSharp[0]);

  const endDate = data.mdx.frontmatter.endDate;
  const outOfDate = isProjectOutdated(endDate);

  return (
    <main>
      <title>Project | Cormac</title>
      <NavBar />
      <Container className="body">
        <Row className="sectionTitle">
          <h1> {data.mdx.frontmatter.title} </h1>
        </Row>
        <Row>
          <Container>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
          </Container>
        </Row>
        {outOfDate && (
          <Row>
            <Alert variant={"warning"}>
              FYI: This project was last updated on {endDate}. It may be out of
              date so take it with a grain of salt.
            </Alert>
          </Row>
        )}
        <Row className="mainText">{children}</Row>
      </Container>
      <Footer />
    </main>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        tech
        blurb
        slug
        endDate
        hero_image {
          childrenImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
      }
      id
      body
    }
  }
`;

export default Project;

export const Head = () => <Seo />;
