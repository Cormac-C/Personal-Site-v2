import * as React from "react"
import NavBar from "../components/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Button, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image"
import './index.css';


const IndexPage = () => {
  return (
    <main>
      <title>Home | Cormac</title>
      <NavBar/>
      <Container className="body">
        <Row className="align-items-center gy-5">
          <Col className="col-6">
            <h1> Cormac Cureton </h1>
            <p> Learner | Designer | Developer </p>
            <p> Seeking opportunities to make a positive impact and grow </p>
          </Col>
          <Col className="justify-content-center align-center col-6" align="center">
            <StaticImage 
              src="../images/icon.png"
              alt="Headshot"
              placeholder="blurred"
              layout="fixed"
              width={200}
              height={200}
            />
          </Col>
          <Col className="justify-content-center col-6" align="center">
            <Button>
              View Projects
            </Button>
          </Col>
          <Col className="justify-content-center col-6" align="center">
            <Button variant="outline-primary">
              About Me
            </Button>
          </Col>
        </Row>
      </Container>
      
    </main>
  )
}

export default IndexPage
