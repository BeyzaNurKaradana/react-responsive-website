import React from 'react'
import "./Title.css"
import { Container } from 'react-bootstrap'

const Title = ({subTitle, title}) => {
  return (
    <Container className='title my-4'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </Container>
  )
}

export default Title