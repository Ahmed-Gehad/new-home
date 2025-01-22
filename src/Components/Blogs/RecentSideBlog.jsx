import React from 'react'
import { Col } from 'react-bootstrap'
import blog1 from '../../imges/blog-img1.jpg'
import blog2 from '../../imges/blog-img2.jpg'
import blog3 from '../../imges/blog-img3.jpg'


const RecentSideBlog = () => {
  return (
    <div>
        <h4 className='fw-bold'>Recent posts</h4>
        <div className='d-flex justify-content-between align-items-center mt-4'>
            <Col lg={6} md={6} sm={6} xs={6} className=''>
            <img src={blog1} alt="" className='w-100 rounded-3 ' />
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className='ps-3'>
                <p className='w-100 fs-6'>13. March 2023.</p>
                <a href="" >Luxury Houses</a>
            </Col>
        </div>
        <div className='d-flex justify-content-between align-items-center mt-4'>
            <Col lg={6} md={6} sm={6} xs={6} className=''>
            <img src={blog2} alt="" className='w-100 rounded-3' />
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className='ps-3'>
                <p className='w-100 fs-6'>13. March 2023.</p>
                <a href="" >House of the Week</a>
            </Col>
        </div>
        <div className='d-flex justify-content-between align-items-center mt-4'>
            <Col lg={6} md={6} sm={6} xs={6} className=''>
            <img src={blog3} alt="" className='w-100 rounded-3' />
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className='ps-3'>
                <p className='w-100 fs-6'>13. March 2023.</p>
                <a href="" >Great Guide</a>
            </Col>
        </div>
    </div>
  )
}

export default RecentSideBlog