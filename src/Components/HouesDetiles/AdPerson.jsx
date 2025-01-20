import React from 'react'

import adPerson from '../../imges/adPerson.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const AdPerson = () => {
    return (
        <div>
         
            <Row className='d-flex'>
                <Col lg={5}>
                    <img src={adPerson} alt="imgSlider2" className='w-100  rounded object-fit-cover ' />
                </Col>
                <Col lg={7}>
                    <p>New Home</p>
                    <p>Rachel Gray</p>
                    <p>560 3rd Ave, New York, NY 10016, USA</p>
                </Col>
            </Row>
            <Row>

            </Row>
      
        </div>
    )
}

export default AdPerson