import React from 'react'

import blog1 from '../../imges/blog-img1.jpg'
import { Col } from 'react-bootstrap'

const RecentSideBlog = () => {
  return (
    <div>
        <h4>Recent posts</h4>
        <div className='d-flex justify-content-between align-items-center mt-4'>
            <Col lg={6} md={6} sm={6} xs={6} className=''>
            <img src={blog1} alt="" className='w-100 rounded-4' />
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className='ps-3'>
                <p className='w-100 fs-6'>13. March 2023.</p>
                <a href="" >Luxury Houses</a>
            </Col>
        </div>
    </div>
  )
}

export default RecentSideBlog