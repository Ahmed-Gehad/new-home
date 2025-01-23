import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <Form className='text-center mt-5'>
      <h2 className='fw-bold'>Login</h2>
      <Col lg={4} xs={10} className='mx-auto mt-5' >
        <Form.Control placeholder="User Name" />
        <Form.Control placeholder="Password " className='my-4 ' />

        <Row>
        <Col lg={6} xs={6}>
        {['checkbox'].map((type) => (
          <div key={`default-${type}`} >
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={`Remember me`}
            />
          </div>
        ))}
        </Col>
        <Col lg={6} xs={6}>
        <a href="">Lost Your password?</a>
        </Col>
        </Row>

        <button className='btn btn-warning w-100 mt-4'>Login</button>

        <div className='d-flex text-center justify-content-center mt-3 ' >
          <p className='mx-2'>Not a member?</p>
          <Link to='/Components/Log/RegisterForm.jsx'>
          <a href=""className='mb-5'>Register here</a>
          </Link>

        </div>

      </Col>
    </Form>
  )
}

export default LoginForm