import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TitleDash from './TitleDash'

const RegisterForm = () => {
  return (
    <div>
      <TitleDash />
      <Form className='text-center mt-5'>
        <h2 className='fw-bold'>Register</h2>
        <Col lg={4} xs={10} className='mx-auto mt-5' >
          <Form.Control placeholder="User Name" />
          <Form.Control placeholder="Email " className='my-4 ' />
          <Form.Control placeholder="Password" />
          <Form.Control placeholder="Repeat Password" className='my-4 ' />

          <Form.Select aria-label="Default select example" className='mb-4'>
            <option>Owner/Buyer</option>
            <option value="1">Agency</option>

          </Form.Select>

          <Form.Text id="passwordHelpBlock" muted>
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
          </Form.Text>


          <button className='btn btn-warning w-100 mt-4'>Register</button>

          <div className='d-flex text-center justify-content-center mt-3 ' >
            <p className='mx-2'>Have an account?</p>
            <Link to='/Pages/LoginPage'>
              <a href="" className='mb-5'>Log In</a>
            </Link>

          </div>

        </Col>
      </Form>
    </div>
  )
}

export default RegisterForm