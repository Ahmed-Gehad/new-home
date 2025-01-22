import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const Mortgage = () => {
    return (
        <div className='Mortgage my-5'>
            <div>
                <h3 className='py-2'>Mortgage calculator</h3>
                <p className='text-muted '>Tantas signiferumque eum at, vix an dicant fierent homero dignissim.</p>
            </div>
            <div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Sale price:</p>
                    <p>89000</p>
                </div>
                <Row>
                    <Form.Label column="sm" lg={7} xs={7} className='mt-2'>
                    Percent down (%):
                    </Form.Label>
                    <Col >
                        <Form.Control size="sm" type="text"  />
                    </Col>
                    <Form.Label column="sm" lg={7} xs={7} className='mt-2'>
                    Years:
                    </Form.Label>
                    <Col >
                        <Form.Control size="sm" type="data"  />
                    </Col>
                    <Form.Label column="sm" lg={7} xs={7} className='mt-2'>
                    Bank interest rate (%):
                    </Form.Label>
                    <Col >
                        <Form.Control size="sm" type="test"  />
                    </Col>
                 
                </Row>
                <button className='btn btn-success w-100 mt-4 py-2'>Make enquiry</button>
            </div>
        </div>


    )
}

export default Mortgage