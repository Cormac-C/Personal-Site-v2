import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row className="footerText justify-content-md-center">
            <p>Built by Cormac Cureton 2021</p>
          </Row>
        </Container>
      </div>
    );
  }
}
