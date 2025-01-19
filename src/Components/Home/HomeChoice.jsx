import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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

import h4P1 from "../../imges/h-4-1.jpg";
import h4P2 from "../../imges/h-4-2.jpg";
import h4P3 from "../../imges/h-4-3.jpg";

import h5P1 from "../../imges/h-5-1.jpg";
import h5P2 from "../../imges/h-5-2.jpg";
import h5P3 from "../../imges/h-5-3.jpg";

import h6P1 from "../../imges/h-6-1.jpg";
import h6P2 from "../../imges/h-6-2.jpg";
import h6P3 from "../../imges/h-6-3.jpg";


import HouesPropertie from '../Properties/HouesPropertie';

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
                <Row className='allign-items-center mx-3 mt-5'>
                    <Col lg={4} md={6} sm={12}>
                        <HouesPropertie
                            image1={h4P1}
                            image2={h4P2}
                            image3={h4P3}
                            type1='Condos'
                            type2='Manhattan'
                            name='Cozy Cottage'
                            description='Lorem ipsum dolor sit amet, wisi nemore
                            fastidii at vis, eos equidem admodum'
                            price='650,000'
                            size='240'
                            bedroom='4'
                            bathroom='3'
                        />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <HouesPropertie
                            image1={h5P1}
                            image2={h5P2}
                            image3={h5P3}
                            type1='Villa'
                            type2='Manhattan'
                            name='Eclectic House'
                            description='Lorem ipsum dolor sit amet, wisi nemore
                            fastidii at vis, eos equidem admodum'
                            price='2,500'
                            size='155'
                            bedroom='2'
                            bathroom='2'
                        />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <HouesPropertie
                            image1={h6P1}
                            image2={h6P2}
                            image3={h6P3}
                            type1='Condos'
                            type2='Staten Island'
                            name='Forest Cabin'
                            description='Lorem ipsum dolor sit amet, wisi nemore
                            fastidii at vis, eos equidem admodum'
                            price='1,200'
                            size='160'
                            bedroom='3'
                            bathroom='2'
                        />
                    </Col>
                </Row>
                <Row className='allign-items-center mx-3 mt-5'>
                    <Col lg={4} md={6} sm={12}>
                        <HouesPropertie
                            image1={h1P1}
                            image2={h1P2}
                            image3={h1P3}
                            type1='Villa'
                            type2='Brooklyn'
                            name='South Sun House'
                            description='Lorem ipsum dolor sit amet, wisi nemore
                            fastidii at vis, eos equidem admodum'
                            price='265,000'
                            size='250'
                            bedroom='3'
                            bathroom='2'
                        />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <HouesPropertie
                            image1={h2P1}
                            image2={h2P2}
                            image3={h2P3}
                            type1='Villa'
                            type2='Brooklyn'
                            name='Mountain Cabin'
                            description='Lorem ipsum dolor sit amet, wisi nemore
                            fastidii at vis, eos equidem admodum'
                            price='89,000'
                            size='125'
                            bedroom='2'
                            bathroom='2'
                        />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <HouesPropertie
                            image1={h3P1}
                            image2={h3P2}
                            image3={h3P3}
                            type1='Condos'
                            type2='Staten Island'
                            name='Pine Forest Bungalow'
                            description='Lorem ipsum dolor sit amet, wisi nemore
                            fastidii at vis, eos equidem admodum'
                            price='1,200'
                            size='160'
                            bedroom='2'
                            bathroom='1'
                        />
                    </Col>  
                </Row>
                <button className='animation d-flex justify-content-center align-items-center py-2 m-auto  bg-orange border-0 rounded-3 text-white px-3 mb-5' >Browse More Properties</button>
            </Container>

        </div>
    )
}

export default HomeChoice