import React from "react";
import { Container, Row } from "react-bootstrap";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "gatsby";
import { Seo } from "../components/seo";

const AboutPage: React.FC = () => {
  const experiences = [
    { name: "Valence Labs", link: "https://www.valencelabs.com/" },
    { name: "Scispot", link: "https://www.scispot.com/" },
    { name: "Xe", link: "https://www.xe.com/" },
    {
      name: "TD Payments Innovation",
      link: "https://www.td.com/ca/en/commercial-banking"
    },
    { name: "360 Education Labs Inc", link: "https://www.yuja.com/" }
  ];

  return (
    <main>
      <title>About | Cormac</title>
      <NavBar />
      <Container className="mt-32 min-h-body-min">
        <Row className="w-min whitespace-nowrap mb-8">
          <h1 className="font-[calc(1.75rem+1.5vw)] after:content-[''] after:block after:w-full after:h-2 after:bg-theme-blue after:left-0 after:rounded-lg">
            {" "}
            About Me{" "}
          </h1>
        </Row>
        <Row>
          <p className="text-xl">
            {" "}
            Currently, M.Sc. Student in the{" "}
            <a
              className="font-medium no-underline text-gray-600"
              href="https://ismart.ece.mcgill.ca/"
              target="_blank"
              rel="noreferrer"
            >
              iSMART Lab
            </a>{" "}
            under the supervision of Prof. Narges Armanfard at McGill.
          </p>
          <p className="text-xl">
            {" "}
            Alum of Systems Design Engineering at University of Waterloo.
          </p>
          <p className="text-xl"> Previously at</p>
          <ul className="list-disc list-inside text-xl">
            {experiences.map((experience) => (
              <li key={experience.name}>
                <a
                  className="font-medium no-underline text-gray-600"
                  href={experience.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {experience.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xl">
            In my free time I'm often running, playing guitar, or trying to
            cheer the Leafs to victory.
          </p>
          <p className="text-xl">
            I'm on the lookout for big, interesting problems in AI. If you'd
            like to collaborate, please <Link to="/contact">reach out</Link>.
          </p>
        </Row>
      </Container>
      <Footer />
    </main>
  );
};

export default AboutPage;

export const Head = () => <Seo />;
