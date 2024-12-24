import React from "react";
import { Container, Row } from "react-bootstrap";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Seo } from "../components/seo";

const AboutPage: React.FC = () => {
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
            M.Sc. Student in the{" "}
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
            {/* TODO: look at moving to a map */}
            <li key="valence-labs">
              <a
                className="font-medium no-underline text-gray-600"
                href="https://www.valencelabs.com/"
                target="_blank"
                rel="noreferrer"
              >
                Valence Labs
              </a>
            </li>
            <li key="scispot">
              <a
                className="font-medium no-underline text-gray-600"
                href="https://www.scispot.com/"
                target="_blank"
                rel="noreferrer"
              >
                Scispot
              </a>
            </li>
            <li key="xe">
              <a
                className="font-medium no-underline text-gray-600"
                href="https://www.xe.com/"
                target="_blank"
                rel="noreferrer"
              >
                Xe
              </a>
            </li>
            <li key="td-payments-innovation">
              <a
                className="font-medium no-underline text-gray-600"
                href="https://www.td.com/ca/en/commercial-banking"
                target="_blank"
                rel="noreferrer"
              >
                TD Payments Innovation
              </a>
            </li>
            <li key="360-education-labs">
              <a
                className="font-medium no-underline text-gray-600"
                href="https://www.yuja.com/"
                target="_blank"
                rel="noreferrer"
              >
                360 Education Labs Inc
              </a>
            </li>
          </ul>
          <p className="text-xl">
            {" "}
            In my free time I'm often running, playing guitar, or trying to
            cheer the Leafs to victory.{" "}
          </p>
          <p className="text-xl">
            {" "}
            Please don't hesitate to reach out if you'd like to chat.{" "}
          </p>
        </Row>
      </Container>
      <Footer />
    </main>
  );
};

export default AboutPage;

export const Head = () => <Seo />;
