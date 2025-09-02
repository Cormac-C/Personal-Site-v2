import React from "react";
import { Container, Row } from "react-bootstrap";

// TODO: This doesn't need to be a react component
const Footer: React.FC = () => {
  return (
    <div className="w-full h-4 text-center">
      <Container>
        <Row className="justify-center">
          <p className="text-xs mb-2">Built by Me (Cormac) 2025</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
