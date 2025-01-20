import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Nearby = () => {
    return (
        <div className='py-3'>
            <h4 className='text-orange'>What's nearby?</h4>
            <p className='text-muted py-3'>Vidisse oportere suscipiantur ut ius, at ius magna postea. Te essent maiestatis mnesarchum mel, error numquam meliore cu usu, in quo persius aliquid omittam.</p>
           <Row>
           <Col lg={6} md={6} sm={6} xs={6}>
                <p>School:
                    1.2km</p>
                <p>University:
                    3km</p>
                <p>Grocery center:
                    0.5km</p>
                <p>Market:
                    1.7km</p>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
                <p>Hospital, medical:
                    1.5km</p>
                <p>
                    Metro station:
                    0.1km</p>
                <p>
                    Gym, wellness:
                    0.8km</p>
                <p>
                    River:
                    0.2km</p>
            </Col>
           </Row>
        </div>
    )
}

export default Nearby