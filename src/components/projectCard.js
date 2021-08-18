import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./projectCard.css";
import { StaticImage } from "gatsby-plugin-image";

export default class ProjectCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <Row>
            <Col className="col-5 align-self-center" align="center">
              <div className="projectImage">
                <StaticImage
                  src="../images/icon.png"
                  alt="Headshot"
                  placeholder="blurred"
                />
              </div>
            </Col>
            <Col className="col-7">
              <Card.Title>Project Name</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Tech · Stack · Info
              </Card.Subtitle>
              <Card.Text>This is a brief description of the project</Card.Text>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
