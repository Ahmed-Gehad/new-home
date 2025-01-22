import React from 'react'

import adPerson from '../../imges/adPerson.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const AdPerson = () => {
    return (
        <div className='pt-4 mt-4'>

            <Row className='d-flex align-items-center justify-content-between'>
                <Col lg={5} md={5} sm={5} xs={5}>
                    <img src={adPerson} alt="imgSlider2" className='w-100  rounded  ' />
                </Col>
                <Col lg={7} md={7} sm={7} xs={7}>
                    <p style={{ margin: '0' }}>New Home</p>
                    <p className='text-orange fw-bold fs-4 ' style={{ margin: '0' }}>Rachel Gray</p>
                    <p className='w-100'>560 3rd Ave, New York, NY 10016, USA</p>
                </Col>
            </Row>
            <Row>
                <div className='d-flex  justify-content-between mt-3'>
                    <p>Office phone:</p>
                    <a href="">+1114445557</a>
                </div>
                <div className='d-flex  justify-content-between '>
                    <p>Mobile phone:</p>
                    <a href="">+7774442225</a>
                </div>
                <div className='d-flex  justify-content-between '>
                    <p>Whatsapp, Viber phone:</p>
                    <a href="">7774442225</a>
                </div>
                <div className='d-flex  justify-content-between '>
                    <p>Email:</p>
                    <a href="">rachelgray@example.com</a>
                </div>
            </Row>
            <button className='btn btn-warning w-100 mt-3 py-2'>View my properties</button>
        </div>
    )
}

export default AdPerson