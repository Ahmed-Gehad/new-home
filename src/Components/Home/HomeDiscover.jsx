import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

const HomeDiscover = () => {
    return (
        <div className='HomeDiscover'>
            <Container>
                <Row className='d-flex align-items-center py-5'>
                    <Col lg={6} sm={12} className='text-white '>
                        <div>
                            <h1 className='fw-bold mb-4 text-orange'>
                                Discover a new
                                <br />
                                way of living
                            </h1>
                            <div className="line mt-4"></div>
                            <p>* Feugait scriptorem qui ea, quo admodum eloquentiam eu. Te
                                <br />
                                malis tibique eum. Ne magna assum everti.</p>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} >
                        <Form className='p-3'>
                            <h2 className='fw-bold mb-3 '>Make an enquiry</h2>
                            <p>Save your time and easily rent or sell your property with
                                <br />
                                 the lowest commission on the real estate market.</p>
                                <div className='px-3'>
                                <input type="text" placeholder='Name' className='form-control mb-3' />
                                <input type="text" placeholder='Email' className='form-control mb-3' />
                                <input type="text" placeholder='Phone' className='form-control mb-3' />
                                <input type="text" placeholder='Message' className='form-control mb-3' />
                                <button className='btn bg-orange w-25 px-3 rounded border-0 fw-bold text-white'>Submit</button>

                                </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeDiscover