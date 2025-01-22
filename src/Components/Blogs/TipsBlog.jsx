import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import tipsBlogImage1 from '../../imges/blog-img1.jpg'
import tipsBlogImage2 from '../../imges/blog-img2.jpg'
import tipsBlogImage3 from '../../imges/blog-img3.jpg'

const TipsBlog = () => {
    return (
        <div className='mt-5 TipsBlog'>
            <Carousel fade>
                <Carousel.Item>
                <img src={tipsBlogImage1} alt="" className='w-100 rounded-4 mt-3' />
                </Carousel.Item>
                <Carousel.Item>
                <img src={tipsBlogImage2} alt="" className='w-100 rounded-4 mt-3' />
                </Carousel.Item>
                <Carousel.Item>
                <img src={tipsBlogImage3} alt="" className='w-100 rounded-4 mt-3' />
                </Carousel.Item>
            </Carousel>
            <div className='d-flex my-2'>
                <a href="" className='me-2 '>Real Estate</a>
                - By
                <a href="" className='ms-1'> Julie Coleman</a>
            </div>
            <h2 className='fw-bold text-orange'>5 Tips for Styling Large Living Room</h2>
            <p className='text-muted mt-3'>Ea cibo choro eos, in duo iudico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persequeris contentiones nec, ex sit modus saepe scriptorem. Enim falli delicata eum te, summo omittan ne mel. At eos ferri adversarium, eu vim sanctus repudiandae. Usu cu inermis conceptam, no sea tantas.</p>
            <button className='btn btn-warning  mt-3 py-3 px-4 rounded-0'>Read More</button>
        </div>
    )
}

export default TipsBlog