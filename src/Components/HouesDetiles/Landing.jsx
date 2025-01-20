import React from 'react'
import { Col, Row } from 'react-bootstrap'



const Landing = (detiles) => {
    return (

        <div className="Landing px-3" >
            <Row >
                <Col lg={8} className='py-3'>
                    <img src={detiles.pic1} alt="imgSlider2" className='w-100   rounded  ' />
                </Col>
                <Col lg={2} md={6}  className='py-3' >
                
                        <img src={detiles.pic2} alt="imgSlider2" className='w-100 pb-2  rounded object-fit-cover 'style={{height:'50%'}} />
                        <img src={detiles.pic3} alt="imgSlider2" className='w-100 pt-2  rounded object-fit-cover 'style={{height:'50%'}} />
                  
                </Col>
                <Col lg={2}  md={6} className='py-3'>
                 
                        <img src={detiles.pic4} alt="imgSlider2" className='w-100 pb-2 rounded  object-fit-cover'style={{height:'50%'}} />
                        <img src={detiles.pic5} alt="imgSlider2" className='w-100 pt-2 rounded  object-fit-cover' style={{height:'50%'}} />

                 
                </Col>
            </Row>
        </div>

    )
}

export default Landing