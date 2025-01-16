import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

// import imge 
import visionImg from "../../imges/explore.jpg";

const VisionHome = () => {
    return (
        <div className='VisionHome'>

            <Container>
                <Row className='mt-5'>
                    <Col lg={6} className='p-3'>
                        <img src={visionImg} alt="imgSlider1" className='w-100  rounded ' />
                    </Col>
                    <Col lg={6} className='p-4'>
                        <h1 className='text-orange fw-bold'>Our Vision</h1>
                        <p className='lead'>We are committed to providing the best possible care for our patients, while also promoting the overall health and well-being of our community. We believe that our patients deserve the highest quality of care, and we strive to exceed their expectations at every turn.</p>
                        <Button className='btn btn-warning border-0 m-auto p-3 mt-4'>Search Proprty</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default VisionHome