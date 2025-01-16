import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

//import imgs
import blog1 from "../../imges/blog-img1.jpg";
import blog2 from "../../imges/blog-img2.jpg";
import blog3 from "../../imges/blog-img3.jpg";

const BlogHome = () => {
    return (
        <div className='BlogHome'>
            <Container>
                <Row>
                    <Col lg={12} >
                        <h1 className='fw-bold'>
                            Read our real
                            <br />
                            estate recent Blogs
                        </h1>
                        <div className="line mt-4"></div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} className='mt-4'>
                        <img src={blog1} alt="lImge" className='w-100 rounded-4' />
                        <div className="link d-flex mt-2">
                            <a href="" className='pe-2'>Property</a>
                            - By
                            <a href="" className='ps-2'>Julie Coleman</a>
                        </div>
                        <h2 className='py-3'>
                            How to Find a Good Real Estate Agent
                        </h2>
                        <p className='lead'>Ea cibo choro eos, in duo iudico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persequeris contentiones nec, ex sit modus</p>
                        <a href="" className='read '>Read More</a>
                    </Col>
                    <Col lg={4} className='mt-4'>
                        <img src={blog2} alt="lImge" className='w-100 rounded-4' />
                        <div className="link d-flex mt-2">
                            <a href="" className='pe-2'>Property</a>
                            - By
                            <a href="" className='ps-2'>Julie Coleman</a>
                        </div>
                        <h2 className='py-3'>
                            15 Ways to Negotiate Your Lease Price
                        </h2>
                        <p className='lead'>Ea cibo choro eos, in duo iudico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persequeris contentiones nec, ex sit modus</p>
                        <a href="" className='read '>Read More</a>
                    </Col>
                    <Col lg={4} className='mt-4'>
                        <img src={blog3} alt="lImge" className='w-100 rounded-4' />
                        <div className="link d-flex mt-2">
                            <a href="" className='pe-2'>Property</a>
                            - By
                            <a href="" className='ps-2'>Julie Coleman</a>
                        </div>
                        <h2 className='py-3'>
                            Houses Designed by Interior Experts
                        </h2>
                        <p className='lead'>Ea cibo choro eos, in duo iudico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persequeris contentiones nec, ex sit modus</p>
                        <a href="" className='read '>Read More</a>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default BlogHome