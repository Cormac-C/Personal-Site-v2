import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./projectCard.css";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    console.log(props.project.image.childrenImageSharp[0]);
    this.image = getImage(props.project.image.childrenImageSharp[0]);
    console.log(this.image);
  }
  render() {
    return (
      <div>
        <Link to={this.props.project.link}>
          <Card>
            <Row xs={1} md={2}>
              <Col className="align-self-center" align="center">
                <div className="projectImage">
                  <GatsbyImage
                    image={this.image}
                    alt={this.props.project.title}
                  />
                </div>
              </Col>
              <Col className="align-self-center">
                <Card.Title>{this.props.project.title}</Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                  {this.props.project.subtitle}
                </Card.Subtitle>
                <Card.Text>{this.props.project.description}</Card.Text>
              </Col>
            </Row>
          </Card>
        </Link>
      </div>
    );
  }
}
