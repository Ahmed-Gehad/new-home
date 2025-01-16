import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// import for count up number 
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


const CountAbout = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        // <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='CountAbout my-5'>
                <Container>
                    <Row className='py-5'>
                        <Col lg={3} md={6} sm={12} className='px-5 text-center'>
                            <h1 className='fw-bold text-orange'>$<CountUp start={0} end={980} duration={5} delay={0} /> K</h1>
                            <p className='w-100'>Median sold price</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='px-5 text-center'>
                            <h1 className='fw-bold text-orange'><CountUp start={0} end={22} duration={5} delay={0} /> </h1>
                            <p className='w-100'>Properties sold</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='px-5 text-center'>
                            <h1 className='fw-bold text-orange'>$<CountUp start={0} end={680} duration={5} delay={0} /> K</h1>
                            <p className='w-100'>sales & rental transactions</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='px-5 text-center'>
                            <h1 className='fw-bold text-orange'><CountUp start={0} end={95} duration={5} delay={0} /></h1>
                            <p className='w-100'>Properties leased</p>
                        </Col>
                    </Row>
                </Container>

            </div>
        // </ScrollTrigger>

    )
}

export default CountAbout