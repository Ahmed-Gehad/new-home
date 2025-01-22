import React from 'react'
import TitleBlog from './TitleBlog'
import TipsBlog from './TipsBlog'

import { Col, Container, Row } from 'react-bootstrap'
import { FamilyBlog } from './FamilyBlog'
import Slide1Blog from './Slide1Blog'
import Top10Blog from './Top10Blog'
import ModernBlog from './ModernBlog'
import Slide2Blog from './Slide2Blog'


const Blog1 = () => {
  return (
    <div>
      <Container className='mt-5'>
        <TitleBlog />
        <Row>
          <Col lg={9}>
            <FamilyBlog />
            <TipsBlog />
            <Slide1Blog />
            <Top10Blog />
            <ModernBlog />
            <Slide2Blog />
          </Col>
          <Col lg={3}>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blog1