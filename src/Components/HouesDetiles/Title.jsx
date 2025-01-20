import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Title = (title) => {
    return (
        <div className='Title'>
            <Container>
                <Row>
                    <Col lg={9} className='pt-4 ps-2'>
                        <a href="" className='fw-bold'>{title.sell}</a>
                        <h1 className='text-orange fw-bold'>{title.name}</h1>
                        <div className='d-flex align-items-center '>
                            <a href="" className='pe-5'>{title.type}</a>
                            <p className='pe-5 pt-3'>Property ID: {title.id}</p>
                            <i class="fa-regular fa-eye pe-1 text-orange"></i>
                            <p className='pt-3'>{title.views}</p>
                        </div>
                    </Col>


                    <Col lg={3} className='pt-5 align-items-center ps-2'>
                        <div className='d-flex '>
                            <h4  className='pe-5 fw-bold'>Price:</h4>

                            <div className='d-flex '>
                                <h4 className='text-orange pe-1 '> {title.price} $ </h4>
                                <p className='text-muted pt-1'>/month</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center '>
                            <div>
                            <a href=""><i class="fa-solid fa-star  pe-1 "></i></a>
                            <a href="" >Add to wishlist</a>
                            </div>
                            <div className='d-flex align-items-center ms-4'> 
                            <a href=""><i class="fa-solid fa-share-nodes px-3 "></i></a>
                            <a href=""><i class="fa-solid fa-plus pe-3 "></i></a>
                            <a href=""><i class="fa-solid fa-print"></i></a>
                            </div>
                        </div>
                       
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Title