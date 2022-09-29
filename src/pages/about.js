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
            Systems Design Engineering at{" "}
            <span className="bold">University of Waterloo</span>.{" "}
          </p>
          <p>
            {" "}
            Prviously at <span className="bold">Scispot.io</span>,{" "}
            <span className="bold">Xe.com</span>, previously at{" "}
            <span className="bold">TD Payments Innovation</span>,{" "}
            <span className="bold">360 Education Labs Inc</span>.{" "}
          </p>
          <p>
            {" "}
            I’m passionate about designing and building innovative, low-friction
            solutions for users facing real-world problems. I look for
            opportunities where I can move between the user-centered design of a
            product and its implementation as a part of a dedicated team.{" "}
          </p>
          <p>
            {" "}
            In my free time I’m often running, playing guitar, or trying to
            cheer the Leafs to victory.{" "}
          </p>
          <p>
            {" "}
            Seeking Coop opportunities for Winter and Summer 2023 (Jan - Aug).
            Please don’t hesitate to reach out if you’d like to chat or join
            forces.{" "}
          </p>
        </Row>
      </Container>
      <Footer />
    </main>
  );
};

export default AboutPage;
