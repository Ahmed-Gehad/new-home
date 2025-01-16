import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'


// import imge 
import modernImg from "../../imges/home-slide-p.jpg";

const HomeModern = () => {
    return (
        <div className='HomeModern'>
            <Container>
                <Row className=' align-items-center'>
                    <Col lg={6} >
                        <div className='HomeModern__img'>
                            <div className='back-color'></div>
                            <img src={modernImg} alt="imgSlider1" className='w-100  rounded p-3' />
                        </div>
                    </Col>
                    <Col lg={6} className='px-5'>
                        <h1 className='fw-bold mt-5'>
                            Modern spaces
                            <br />
                            and
                            <br />
                            premium design
                        </h1>
                        <div className="line my-4"></div>
                        <p>
                            Lorem ipsum dolor sit amet, minimum inimicus quo no, at
                            <br />
                            vix primis viderere vituperatoribus. In corpora argumentum.
                        </p>
                        <p>– Mea omnium explicari</p>
                        <p>– His no legere feugaitoer</p>
                        <p>– illum idquem</p>
                        <Button className='btn btn-warning border-0 m-auto p-3 mt-4'>Search Proprty</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeModern