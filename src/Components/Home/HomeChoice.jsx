import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

// for slid 
import Carousel from 'react-bootstrap/Carousel';

// import react awesome
import { Zoom } from 'react-awesome-reveal';

//import imgs
import h1P1 from "../../imges/home-h-1-1.jpg";
import h1P2 from "../../imges/home-h-1-2.jpg";
import h1P3 from "../../imges/home-h-1-3.jpg";

import h2P1 from "../../imges/home-h-2-1.jpg";
import h2P2 from "../../imges/home-h-2-2.jpg";
import h2P3 from "../../imges/home-h-2-3.jpg";

import h3P1 from "../../imges/home-h-3-1.jpg";
import h3P2 from "../../imges/home-h-3-2.jpg";
import h3P3 from "../../imges/home-h-3-3.jpg";

const HomeChoice = () => {
    return (
        <div className='HomeChoice'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1 className='fw-bold py-5'>Our choice of <br />
                            popular real estate</h1>
                        <div className='line'></div>
                    </Col>
                </Row>
                <Row className='allign-items-center mx-3'>
                    <Col lg={4} md={6} sm={12}>
                        <Carousel className='mb-3'>
                            <Carousel.Item className='full-item'>
                                <img src={h1P1} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='full-item'>
                                <img src={h1P2} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='full-item'>
                                <img src={h1P3} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <div className='detiles'>
                            <a href="" className='px-1'><i class="fa-solid fa-location-dot pe-2"></i>Villas</a>
                            -
                            <a href="" className='px-1'>Brooklyn</a>
                        </div>
                        <h3 className='pt-3 fw-bold '>
                            South Sun House
                        </h3>
                        <p>Lorem ipsum dolor sit amet, wisi nemore
                            <br />
                            fastidii at vis, eos equidem admodum
                        </p>
                        <div className=' d-flex justify-content-between align-items-center pt-3 pb-5'>
                            <h3 className='text-orange'>265,000 $</h3>
                            <div className='d-flex align-items-center fw-bold'>
                                <i class="fa-solid fa-expand"></i>
                                <h5 className='pt-2 px-1'>250m <sup>2</sup></h5>
                                <i class="fa-solid fa-bed"></i>
                                <h5 className='pt-2 px-1'>3</h5>
                                <i class="fa-solid fa-bath"></i>
                                <h5 className='pt-2 px-1'>2</h5>
                            </div>
                        </div>
                        
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Carousel className='mb-3'>
                            <Carousel.Item className='full-item'>
                                <img src={h2P1} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='full-item'>
                                <img src={h2P2} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='full-item'>
                                <img src={h2P3} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <div className='detiles'>
                            <a href="" className='px-1'><i class="fa-solid fa-location-dot pe-2"></i>Villas</a>
                            -
                            <a href="" className='px-1'>Brooklyn</a>
                        </div>
                        <h3 className='pt-3 fw-bold'>
                            Mountain Cabin
                        </h3>
                        <p>Lorem ipsum dolor sit amet, wisi nemore
                            <br />
                            fastidii at vis, eos equidem admodum
                        </p>
                        <div className='d-flex justify-content-between align-items-center pt-3 pb-5'>
                            <h3 className='text-orange'>89,000 $</h3>
                            <div className='d-flex align-items-center fw-bold'>
                                <i class="fa-solid fa-expand"></i>
                                <h5 className='pt-2 px-1'>125m <sup>2</sup></h5>
                                <i class="fa-solid fa-bed"></i>
                                <h5 className='pt-2 px-1'>2</h5>
                                <i class="fa-solid fa-bath"></i>
                                <h5 className='pt-2 px-1'>2</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Carousel className='mb-3'>
                            <Carousel.Item className='full-item'>
                                <img src={h3P1} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='full-item'>
                                <img src={h3P2} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='full-item'>
                                <img src={h3P3} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <div className='detiles'>
                            <a href="" className='px-1'><i class="fa-solid fa-location-dot pe-2"></i>Condos
                            </a>
                            -
                            <a href="" className='px-1'>Staten Island</a>
                        </div>
                        <h3 className='pt-3 fw-bold'>
                            Pine Forest Bungalow
                        </h3>
                        <p>Lorem ipsum dolor sit amet, wisi nemore
                            <br />
                            fastidii at vis, eos equidem admodum
                        </p>
                        <div className='d-flex justify-content-between align-items-center pt-3 pb-5'>
                            <h3 className='text-orange'>1,200 $</h3>
                            <div className='d-flex align-items-center fw-bold'>
                                <i class="fa-solid fa-expand"></i>
                                <h5 className='pt-2 px-1'>160m <sup>2</sup></h5>
                                <i class="fa-solid fa-bed"></i>
                                <h5 className='pt-2 px-1'>4</h5>
                                <i class="fa-solid fa-bath"></i>
                                <h5 className='pt-2 px-1'>2</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='allign-items-center mx-3'>
                    <Col lg={4} md={6} sm={12}>
                        <Carousel className='mb-3'>
                            <Carousel.Item className='full-item'>
                                <img src={h1P1} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='full-item'>
                                <img src={h1P2} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='full-item'>
                                <img src={h1P3} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <div className='detiles'>
                            <a href="" className='px-1'><i class="fa-solid fa-location-dot pe-2"></i>Apartments
                            </a>
                            -
                            <a href="" className='px-1'>Queens</a>
                        </div>
                        <h3 className='pt-3 fw-bold'>
                            White Stylish Loft
                        </h3>
                        <p>Lorem ipsum dolor sit amet, wisi nemore
                            <br />
                            fastidii at vis, eos equidem admodum
                        </p>
                        <div className='d-flex justify-content-between align-items-center pt-3 pb-5'>
                            <h3 className='text-orange'>550,000 $</h3>
                            <div className='d-flex align-items-center fw-bold'>
                                <i class="fa-solid fa-expand"></i>
                                <h5 className='pt-2 px-1'>250m <sup>2</sup></h5>
                                <i class="fa-solid fa-bed"></i>
                                <h5 className='pt-2 px-1'>4</h5>
                                <i class="fa-solid fa-bath"></i>
                                <h5 className='pt-2 px-1'>3</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Carousel className='mb-3'>
                            <Carousel.Item className='full-item'>
                                <img src={h2P1} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='full-item'>
                                <img src={h2P2} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='full-item'>
                                <img src={h2P3} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <div className='detiles'>
                            <a href="" className='px-1'><i class="fa-solid fa-location-dot pe-2"></i>Condos
                            </a>
                            -
                            <a href="" className='px-1'>Manhattan</a>
                        </div>
                        <h3 className='pt-3 fw-bold'>
                            Park House
                        </h3>
                        <p>Lorem ipsum dolor sit amet, wisi nemore
                            <br />
                            fastidii at vis, eos equidem admodum
                        </p>
                        <div className='d-flex justify-content-between align-items-center pt-3 pb-5'>
                            <h3 className='text-orange'>2,200 $</h3>
                            <div className='d-flex align-items-center fw-bold'>
                                <i class="fa-solid fa-expand"></i>
                                <h5 className='pt-2 px-1'>150m <sup>2</sup></h5>
                                <i class="fa-solid fa-bed"></i>
                                <h5 className='pt-2 px-1'>2</h5>
                                <i class="fa-solid fa-bath"></i>
                                <h5 className='pt-2 px-1'>2</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Carousel className='mb-3'>
                            <Carousel.Item className='full-item'>
                                <img src={h3P1} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='full-item'>
                                <img src={h3P2} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='full-item'>
                                <img src={h3P3} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                                <Carousel.Caption className='caption'>
                                    <h3 className='text-orange'>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <div className='detiles'>
                            <a href="" className='px-1'><i class="fa-solid fa-location-dot pe-2"></i>Apartments
                            </a>
                            -
                            <a href="" className='px-1'>The Bronx</a>
                        </div>
                        <h3 className='pt-3 fw-bold'>
                            South Sun House
                        </h3>
                        <p>Lorem ipsum dolor sit amet, wisi nemore
                            <br />
                            fastidii at vis, eos equidem admodum
                        </p>
                        <div className='d-flex justify-content-between align-items-center pt-3 pb-5'>
                            <h3 className='text-orange'>1,200 $</h3>
                            <div className='d-flex align-items-center fw-bold'>
                                <i class="fa-solid fa-expand"></i>
                                <h5 className='pt-2 px-1'>160m <sup>2</sup></h5>
                                <i class="fa-solid fa-bed"></i>
                                <h5 className='pt-2 px-1'>4</h5>
                                <i class="fa-solid fa-bath"></i>
                                <h5 className='pt-2 px-1'>2</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
                <button className='animation d-flex justify-content-center align-items-center py-2 m-auto  bg-orange border-0 rounded-3 text-white px-3 mb-5' >Browse More Properties</button>
            </Container>

        </div>
    )
}

export default HomeChoice