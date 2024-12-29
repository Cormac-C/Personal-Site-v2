import React from "react";
import NavBar from "../components/navbar";
import { Seo } from "../components/seo";
import { Col, Row, Button, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "motion/react";

const IndexPage: React.FC = () => {
  return (
    <main>
      <title>Home | Cormac</title>
      <NavBar />
      <Container className="mt-max-margin min-h-body-min gy-4">
        <Row xs={1} md={2} className="align-items-center gy-5">
          <Col md={7}>
            <div className="mb-8 text-theme-blue !text-7xl">Cormac Cureton</div>
            <div className="!text-2xl font-semibold text-gray-600">
              <a className="no-underline text-gray-600" href="/lite">
                AI Researcher
              </a>{" "}
              | Engineer{" "}
            </div>
          </Col>
          <Col
            md={5}
            className="justify-content-center align-center"
            align="center"
          >
            <div className="md:mr-[20%] md:ml-0 mx-[10%]">
              <StaticImage
                className="rounded-full"
                src="../images/face.jpg"
                alt="Headshot"
                placeholder="blurred"
              />
            </div>
          </Col>
        </Row>
        <Row xs={1} md={2} className="!mt-[5%]">
          <Col align="center">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                href="/projects"
                className="!bg-theme-blue hover:!bg-theme-blue-accent !text-2xl py-3 my-1 rounded-md min-w-48"
              >
                <div className="d-flex flex-row justify-content-around">
                  <StaticImage
                    className="m-1"
                    src="../images/codeIcon.svg"
                    alt="Code Icon"
                    placeholder="blurred"
                    layout="fixed"
                    height={30}
                  />
                  <span>View Projects</span>
                </div>
              </Button>
            </motion.div>
          </Col>
          <Col align="center">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline-primary"
                className="hover:!bg-theme-blue-light !text-2xl py-3 my-1 rounded-md min-w-48"
                href="/about"
              >
                <div className="d-flex flex-row justify-content-around">
                  <StaticImage
                    className="m-1"
                    src="../images/profileIcon.svg"
                    alt="Profile Icon"
                    placeholder="blurred"
                    layout="fixed"
                    height={30}
                  />
                  <span className="text-theme-blue">About Me</span>
                </div>
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
