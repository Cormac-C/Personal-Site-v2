import * as React from "react";
import { graphql } from "gatsby"; // highlight-line
import { Container, Row } from "react-bootstrap";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const Project = ({ data, children }) => {
  console.log("Create project");
  console.log(data.mdx.body);
  const image = getImage(data.mdx.frontmatter.hero_image.childrenImageSharp[0]);
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
