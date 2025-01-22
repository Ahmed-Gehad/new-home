import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import houseImge1 from '../imges/h-6-1.jpg'
import houseImge2 from '../imges/h-6-2.jpg'
import houseImge3 from '../imges/h-6-3.jpg'
import houseImge4 from '../imges/h-6-4.jpg'
import houseImge5 from '../imges/h-6-5.jpg'


import Landing from '../Components/HouesDetiles/Landing'
import Title from '../Components/HouesDetiles/Title'


import Description from '../Components/HouesDetiles/Description'

import FeaturesTitle from '../Components/HouesDetiles/FeaturesTitle'
import DetailsFeatures from '../Components/HouesDetiles/DetailsFeatures'
import UtilityFeatures from '../Components/HouesDetiles/UtilityFeatures'
import OutdoorFeatures from '../Components/HouesDetiles/OutdoorFeatures'
import Location from '../Components/HouesDetiles/Location'
import Nearby from '../Components/HouesDetiles/Nearby'
import SidebarProperty from '../Components/HouesDetiles/SidebarProperty'



const HouesDetiles3 = () => {
  return (
    <div className='HouesDetiles my-5'>
      <Landing
        pic1={houseImge1}
        pic2={houseImge2}
        pic3={houseImge3}
        pic4={houseImge4}
        pic5={houseImge5}
      />

      <Title
        sell='For Rent'
        name='Forest Cabin'
        type='Condos'
        id='55F886'
        views='736'
        price='1,200 '
      />

      <Container>
        <Row>
          <Col lg={9} >
            <Description />
            <FeaturesTitle />
            <DetailsFeatures />
            <UtilityFeatures />
            <OutdoorFeatures />
            <Location />
            <Nearby />
          </Col>
          <Col lg={3}>
            <SidebarProperty />
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default HouesDetiles3