import * as React from "react";
import { graphql } from "gatsby"; // highlight-line
import { Container, Row } from "react-bootstrap";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Project = ({ data }) => {
  return (
    <main>
      <title>Project | Cormac</title>
      <NavBar />
      <Container className="body">
        <Row className="sectionTitle">
          <h1> {data.mdx.frontmatter.title} </h1>
        </Row>
        <Row className="mainText">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Row>
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
      }
      id
      body
    }
  }
`;

export default Project;
