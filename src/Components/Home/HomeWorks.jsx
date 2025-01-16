import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const HomeWorks = () => {
  return (
    <div className='HomeWorks'>
        <Container>
            <Row>
                <Col lg={12}>
                <h1 className='fw-bold'>
                How It works?
                <br />
                Find a perfect home
                </h1>
                <div className="line mt-4"></div>
                </Col>
            </Row>
            <Row className='py-5'>
              <Col lg={3}className='px-4 text-center item border-0' >
              <i class="fa-solid fa-house-chimney-crack"></i>
              <h3 className='mt-3'>Find real estate</h3>
              <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
              </Col>
              <Col lg={3} className='item px-4 text-center'>
              <i class="fa-solid fa-house"></i>
              <h3 className='mt-3'>Meet relator</h3>
              <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
              </Col>
              <Col lg={3} className='item px-4 text-center'>
              <i class="fa-regular fa-file"></i>
              <h3 className='mt-3'>Documents</h3>
              <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
              </Col>
              <Col lg={3} className='item px-4 text-center' >
              <i class="fa-solid fa-key"></i>
              <h3 className='mt-3'>Take the keys</h3>
              <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
              </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HomeWorks