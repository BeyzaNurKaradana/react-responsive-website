import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Title/Title";

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img
            width={500}
            className="aboutPhoto"
            src="https://greatstack.in/assets/program-1-DA_EvTPy.png"
            alt="student1"
          />
        </Col>
        <Col>
          <Title
            subTitle={"ABOUT UNIVERSITY"}
            title={"Nurturing Tomorrow's Leaders Today"}
          />
          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education. With
            a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities. Whether
            you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
