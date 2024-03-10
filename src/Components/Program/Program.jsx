import React from 'react'
import "./Program.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row,Col } from 'react-bootstrap';

const Program = () => {
  return (
    <Container>
        <Row className='program-row mb-5'>
            <Col >
                <img className='studentPhoto' src='https://greatstack.in/assets/program-1-DA_EvTPy.png' alt='student1'/>
            </Col>
            <Col >
                <img className='studentPhoto' src='https://greatstack.in/assets/program-1-DA_EvTPy.png' alt='student2'/>
            </Col>
            <Col >
                <img className='studentPhoto' src='https://greatstack.in/assets/program-1-DA_EvTPy.png' alt='student3'/>
            </Col>
        </Row>
    </Container>
  )
}

export default Program