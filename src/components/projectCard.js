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
            <Col className="col-4 align-self-center" align="center">
              <div className="projectImage">
                <StaticImage
                  src="../images/icon.png"
                  alt={this.props.project.title}
                  placeholder="blurred"
                />
              </div>
            </Col>
            <Col className="col-8 ">
              <Card.Title>{this.props.project.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {this.props.project.subtitle}
              </Card.Subtitle>
              <Card.Text>{this.props.project.description}</Card.Text>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
