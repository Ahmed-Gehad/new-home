import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import houseImge1 from '../imges/h-4-1.jpg'
import houseImge2 from '../imges/h-4-2.jpg'
import houseImge3 from '../imges/h-4-3.jpg'
import houseImge4 from '../imges/h-4-4.jpg'
import houseImge5 from '../imges/h-4-5.jpg'

import Description from '../Components/HouesDetiles/Description'
import Sidebar from '../Components/HouesDetiles/Sidebar'
import Title from '../Components/HouesDetiles/Title'
import Landing from '../Components/HouesDetiles/Landing'
import FeaturesTitle from '../Components/HouesDetiles/FeaturesTitle'
import DetailsFeatures from '../Components/HouesDetiles/DetailsFeatures'
import UtilityFeatures from '../Components/HouesDetiles/UtilityFeatures'
import OutdoorFeatures from '../Components/HouesDetiles/OutdoorFeatures'
import Location from '../Components/HouesDetiles/Location'
import Nearby from '../Components/HouesDetiles/Nearby'



const HouesDetiles1 = () => {
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
        name='Riverside Bungalow'
        type='Villas'
        id='55S886'
        views='656'
        price='89,000'
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
              <Sidebar />
            </Col>
          </Row>
        </Container>
      
     
    </div>
  )
}

export default HouesDetiles1