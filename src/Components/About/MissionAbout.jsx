import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

// import imge 
import MissionImg from "../../imges/MissionImg.jpg";

const MissionAbout = () => {
    return (
        <div className='MissionAbout'>

            <Container>
                <Row className='mt-5'>

                    <Col lg={6} className='p-4'>
                        <h1 className='text-orange fw-bold'>Mission</h1>
                        <p className='text-muted lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>
                        <Button className='btn btn-warning border-0 m-auto p-3 mt-4'>Search Proprty</Button>
                    </Col>
                    <Col lg={6} className='p-3'>
                        <img src={MissionImg} alt="imgSlider2" className='w-100  rounded ' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MissionAbout