import React from 'react'
import "./Campus.css"
import { Button, Col, Container, Row } from 'react-bootstrap'

const Campus = () => {
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
            <Col >
                <img className='studentPhoto' src='https://greatstack.in/assets/program-1-DA_EvTPy.png' alt='student3'/>
            </Col>
        </Row>
        <Row className='campus-button mb-5'>
        <Button className="btn mb-5" variant="light">
          Explore More
          </Button>
        </Row>
        
    </Container>
  )
}

export default Campus