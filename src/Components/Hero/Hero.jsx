import React from "react";
import "./Hero.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <Container fluid className="hero">
      <Row >
        <Col>
          <h1>We Ensure better education for a better world</h1>
          <p>
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education
          </p>
          <Button className="btn ms-0" variant="light">
          Explore More
          </Button>
        </Col>
      </Row>
      
    </Container>
    
  );
};

export default Hero;
