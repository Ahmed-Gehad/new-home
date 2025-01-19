import React from 'react'

// for slid 
import Carousel from 'react-bootstrap/Carousel';

//import imgs
import h1P1 from "../../imges/home-h-1-1.jpg";
import h1P2 from "../../imges/home-h-1-2.jpg";
import h1P3 from "../../imges/home-h-1-3.jpg";




const HouesPropertie = (house) => {
    return (
        <div className='HouesPropertie'>

            <Carousel className='mb-3'>
                <Carousel.Item className='full-item'>
                    <img src={house.image1} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                    <Carousel.Caption className='caption'>
                        <h3 className='text-orange'>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='full-item'>
                    <img src={house.image2} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                    <Carousel.Caption className='caption'>
                        <h3 className='text-orange'>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='full-item'>
                    <img src={house.image3} alt="imgSlider1" className='w-100 rounded-3' style={{ height: '250px' }} />
                    <Carousel.Caption className='caption'>
                        <h3 className='text-orange'>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='detiles'>
                <a href="" className='px-1'><i class="fa-solid fa-location-dot pe-2"></i>{house.type1}</a>
                -
                <a href="" className='px-1'>{house.type2}</a>
            </div>


            <h3 className='pt-3 fw-bold'>{house.name}</h3>
            <p>{house.description}</p>

            <div className=' d-flex justify-content-between align-items-center pt-3 pb-5'>
                <h3 className='text-orange'>{house.price} $</h3>

                <div className='d-flex align-items-center fw-bold'>
                    <i class="fa-solid fa-expand"></i>
                    <h5 className='pt-2 px-1'>{house.size} m<sup>2</sup></h5>
                    <i class="fa-solid fa-bed"></i>
                    <h5 className='pt-2 px-1'>{house.bedroom}</h5>
                    <i class="fa-solid fa-bath"></i>
                    <h5 className='pt-2 px-1'>{house.bathroom}</h5>
                </div>
            </div>
        </div>
    )
}

export default HouesPropertie