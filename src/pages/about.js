import * as React from "react";
import { Container, Row } from "react-bootstrap";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const AboutPage = () => {
  return (
    <main>
      <title>About | Cormac</title>
      <NavBar />
      <Container className="body">
        <Row className="sectionTitle">
          <h1> About Me </h1>
        </Row>
        <Row>
          <p>
            {" "}
            M.Sc. Student in the{" "}
            <a
              className="bold"
              href="https://ismart.ece.mcgill.ca/"
              target="_blank"
              rel="noreferrer"
            >
              iSMART Lab
            </a>{" "}
            under the supervision of Prof. Narges Armanfard at McGill.
          </p>
          <p> Alum of Systems Design Engineering at University of Waterloo.</p>
          <p>
            {" "}
            Previously at
            <ul>
              <li>
                <a
                  className="bold"
                  href="https://www.valencelabs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Valence Labs
                </a>
              </li>
              <li>
                <a
                  className="bold"
                  href="https://www.scispot.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Scispot
                </a>
              </li>
              <li>
                <a
                  className="bold"
                  href="https://www.xe.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Xe
                </a>
              </li>
              <li>
                <a
                  className="bold"
                  href="https://www.td.com/ca/en/commercial-banking"
                  target="_blank"
                  rel="noreferrer"
                >
                  TD Payments Innovation
                </a>
              </li>
              <li>
                <a
                  className="bold"
                  href="https://www.yuja.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  360 Education Labs Inc
                </a>
              </li>
            </ul>
          </p>
          <p>
            {" "}
            In my free time I'm often running, playing guitar, or trying to
            cheer the Leafs to victory.{" "}
          </p>
          <p> Please don't hesitate to reach out if you'd like to chat. </p>
        </Row>
      </Container>
      <Footer />
    </main>
  );
};

export default AboutPage;
