import React, { Component } from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import "./projectCard.css";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { isProjectOutdated } from "../utils";

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.image = getImage(props.project.image.childrenImageSharp[0]);
  }
  render() {
    const outOfDate = isProjectOutdated(this.props.project.endDate);
    return (
      <div>
        <Link to={this.props.project.link}>
          <Card className="projectCard">
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
                  {outOfDate && (
                    <Badge pill bg="secondary" className="m-0.5">
                      🕒 Old
                    </Badge>
                  )}{" "}
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
