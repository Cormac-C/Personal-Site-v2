import React from "react";
import { graphql } from "gatsby"; // highlight-line
import { Container, Row, Alert } from "react-bootstrap";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { Seo } from "../../components/seo";
import { isProjectOutdated } from "../../utils";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const Project: React.FC = ({ data, children }: any) => {
  const image = getImage(
    data.mdx.frontmatter.hero_image.childrenImageSharp[0]
  )!;

  const endDate = data.mdx.frontmatter.endDate;
  const outOfDate = isProjectOutdated(endDate);

  return (
    <main>
      <title>Project | Cormac</title>
      <NavBar />
      <Container className="mt-32 min-h-body-min">
        <Row className="md:w-min md:whitespace-nowrap mb-8">
          <h1 className="font-[calc(1.75rem+1.5vw)] after:content-[''] after:block after:w-full after:h-2 after:bg-theme-blue after:left-0 after:rounded-lg">
            {" "}
            {data.mdx.frontmatter.title}{" "}
          </h1>
        </Row>
        <Row>
          <Container>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
          </Container>
        </Row>
        {outOfDate && (
          <Row className="my-4">
            <Alert variant={"warning"}>
              FYI: This project was last updated on {endDate}. It may be out of
              date so take it with a grain of salt.
            </Alert>
          </Row>
        )}
        <Row className="mb-12">{children}</Row>
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
