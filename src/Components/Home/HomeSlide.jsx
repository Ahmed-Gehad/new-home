import React from 'react'

// for slide 
import Carousel from 'react-bootstrap/Carousel';

//import imgs
import imgSlider1 from "../../imges/home-img-1.jpg";
import imgSlider2 from "../../imges/home-img-2.jpg";
import Slider3 from "../../imges/home-img-3.jpg";



import { Col } from 'react-bootstrap';



const HomeSlide = () => {
    return (
        <div className='home-slide'>
            <Col lg={12} md={12} sm={12}>
                <Carousel fade >

                    <Carousel.Item className='head'>
                        <img src={imgSlider1} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '70vh'  }} />
                        <Carousel.Caption className='slider-text '>
                            <h1 className='mb-5'>Buy or rent properties
                                with no commission</h1>
                           

                        </Carousel.Caption>
                    </Carousel.Item>


                    
                    <Carousel.Item className='head'>
                        <img src={imgSlider2} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '70vh'  }}  />
                         <Carousel.Caption className='slider-text '>
                            <h1 className='mb-5'>Buy or rent properties
                                with no commission</h1>
                            {/* <ButtonGroup className='btn-group p-4' style={{marginTop: '30px'}}>
                                <DropdownButton as={ButtonGroup} title="Category" id="bg-nested-dropdown" >
                                    <Dropdown.Item eventKey="1">Apartments</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Condos</Dropdown.Item>
                                    <Dropdown.Item eventKey="1">Apartments</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Condos</Dropdown.Item>
                                    <Dropdown.Item eventKey="1">Houses</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Villas</Dropdown.Item>
                                </DropdownButton>
                                <DropdownButton as={ButtonGroup} title="Location" id="bg-nested-dropdown" className='mx-3' >
                                    <Dropdown.Item eventKey="1">Brooklyn</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Manhattan</Dropdown.Item>
                                    <Dropdown.Item eventKey="1">Queens</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Staten Island</Dropdown.Item>
                                </DropdownButton>
                                <Button className='btn-search'><i class="fa-solid fa-magnifying-glass p-1"></i>Search property</Button>
                            </ButtonGroup> */}
                          
                        </Carousel.Caption>
                    </Carousel.Item >


                    <Carousel.Item className='head'>

                        <img src={Slider3} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '70vh'  }}  />

                         <Carousel.Caption className='slider-text '>
                            <h1 className='mb-5'>Buy or rent properties
                                with no commission</h1>
                            
                          
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
            </Col>
        </div>
    )
}

export default HomeSlide