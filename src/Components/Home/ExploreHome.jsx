import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'


//import imgs
import exploreImge from "../../imges/explore.jpg";

const ExploreHome = () => {
    return (
        <div className='ExploreHome'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='exploreImge'>
                            <div className='back-color'></div>
                            <img src={exploreImge} alt="rTopImge" className='w-100 rounded-3 mt-4' />
                        </div>
                    </Col>
                    <Col lg={6} className='px-5 my-5'>
                        <h1>
                            Explore your home
                            <br />
                            loan options
                        </h1>
                        <div className="line mt-4"></div>
                        <p>Lorem ipsum dolor sit amet, minimum inimicus quo no, at vix primis viderere vituperatoribus. In corpora argumentum. Vix ferri dicam contentiones ne, ex appetere salutatus</p>
                        <Button className='btn btn-warning border-0 m-auto p-3 mt-4'>Search Proprty</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default ExploreHome