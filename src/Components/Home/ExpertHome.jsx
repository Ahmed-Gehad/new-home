import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


//import imgs
import lImge from "../../imges/expert-1.jpg";
import rTopImge from "../../imges/expert-2.jpg";
import rBottomImge from "../../imges/expert-3.jpg";

const ExpertHome = () => {
    return (
        <div className='ExpertHome'>
            <Container>
                <Row className='mt-5'>
                    <Col lg={12}>
                        <h1 className='fw-bold '>
                            Our expert will help you
                            <br />
                            make the renovation
                        </h1>
                        <div className="line mt-4"></div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <div className="item mt-5 d-flex justify-content-around align-items-center">
                            <i class="fa-solid fa-house-laptop fs-1 text-orange px-4 "></i>
                            <div>
                                <h3 className='fw-bold'>Find inspiration</h3>
                                <p className='lead'>Sumo petentium ut per, at his wisim utinam adipis
                                    <br />
                                    cing. Est e graeco quod suavitate vix ad praesent.</p>
                            </div>
                        </div>
                        <div className="item mt-5 d-flex justify-content-around align-items-center">
                            <i class="fa-solid fa-house-laptop fs-1 text-orange px-4"></i>
                            <div>
                                <h3 className='fw-bold'>Find architect/designer</h3>
                                <p className='lead'>Sumo petentium ut per, at his wisim utinam adipis
                                    <br />
                                    cing. Est e graeco quod suavitate vix ad praesent.</p>
                            </div>
                        </div>
                        <div className="item mt-5 d-flex justify-content-around align-items-center mb-3">
                            <i class="fa-solid fa-paint-roller fs-1 text-orange px-4"></i>
                            <div>
                                <h3 className='fw-bold'>Begin renovation</h3>
                                <p className='lead'>Sumo petentium ut per, at his wisim utinam adipis
                                    <br />
                                    cing. Est e graeco quod suavitate vix ad praesent.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} className='px-3'>
                        <div className='d-flex '>
                            <div  className="left-imge">
                            <img src={lImge} alt="lImge" className=' rounded-3 h-75 mt-5 h-75  'style={{width:"250px", marginRight:"20px"}} />

                            </div>
                            <div className="right-imge mt-5">
                            <img src={rTopImge} alt="rTopImge" className='w-100 rounded-3 '  />
                            <img src={rBottomImge} alt="rBottomImge" className='w-100 rounded-3 mt-5' />

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ExpertHome

{/*  */ }