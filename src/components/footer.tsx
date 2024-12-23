import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-4 text-center">
      <Container>
        <Row className="justify-center">
          <p className="text-xs mb-2">Built by Cormac Cureton 2024</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
