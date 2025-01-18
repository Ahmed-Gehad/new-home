import React from 'react'
import HomeContact from '../Components/Contact/HomeContact'
import { Col, Container, Row } from 'react-bootstrap'
import MessageContact from '../Components/Contact/MessageContact'
import DetailsContact from '../Components/Contact/DetailsContact'

const ContactPage = () => {
  return (
    <div>
        <HomeContact />
        <Container>
          <Row className='py-5'>
            <Col lg={6} sm={12}> <MessageContact /></Col>
            <Col lg={6} sm={12}> <DetailsContact /></Col>
          </Row>
        </Container>
    </div>
  )
}

export default ContactPage