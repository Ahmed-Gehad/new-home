import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// import imge
import logo from '../imges/logo.png'

const Footerr = () => {
    return (
        <div className='Footerr mt-5'>

            <Container>
                <Row>
                    <Col lg={3} sm={6} className='mb-5 px-4'>
                        <img src={logo} alt='logo' className='logo ' style={{ width: '100px' }} />
                        <p className='lead pt-4'>A contemporary theme we designed specifically for real estate and property showcase websites, equipped with every option, element and feature your site may need.</p>
                        <a href="" style={{ marginTop: 20, marginBottom: 20 }}>Read more</a>
                    </Col>
                    <Col lg={3} sm={6} className='mb-5'>
                        <h4 className='fw-bold text-orange ms-4'>Contact us</h4>
                        <ul className='mt-5'>
                            <li >
                                <a href="">Alexandria EGYPT</a>
                            </li>
                            <li className='mt-2'>
                                <a href="">+201204426814</a>

                            </li>
                            <li className='mt-2'>
                                <a href="">+201093915673</a>
                            </li>
                            <li className='mt-2 d-flex align-items-center'>
                                <i className="fa-solid fa-envelope pt-1 pe-2"></i>
                                <a href="">Agehad248@gmail.com</a>
                            </li>
                            <li className='mt-2 d-flex align-items-center'>
                                <i className="fa-brands fa-linkedin pt-1 pe-2"></i>
                                <a href="">linkedin.com/in/ahmedgehad1</a>
                            </li>
                            <li className='mt-2 d-flex align-items-center'>
                                <i class="fa-brands fa-github pt-1 pe-2"></i>
                                <a href="">github.com/Ahmed-Gehad</a>
                            </li>

                        </ul>
                    </Col>
                    <Col lg={3} sm={6} className='mb-5'>
                        <h4 className='text-orange ms-4 fw-bold'>
                            Categories
                        </h4>
                        <ul className='mt-5'>
                            <li >
                                <a href="">Recent property</a>
                            </li>
                            <li className='pt-3'>
                                <a href="">
                                To Sell
                                </a>
                            </li>
                            <li className='pt-3'>
                                <a href="">To Buy</a>
                            </li>
                            <li className='pt-3'>
                                <a href="">To Rent</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} sm={6} className='mb-5'>
                        <h4 className='text-orange ms-4 fw-bold'>
                            Links
                        </h4>
                        <ul className='mt-5'>
                            <li >
                                <a href="">Recent Latest News</a>
                            </li>
                            <li className='pt-3'>
                                <a href="">
                                About Us
                                </a>
                            </li>
                            <li className='pt-3'>
                                <a href="">FAQ Page</a>
                            </li>
                            <li className='pt-3'>
                                <a href="">Contact Us</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footerr