import React from 'react'
import { Form } from 'react-bootstrap'

const Schedule = () => {
  return (
    <div className='Schedule mt-5'>
        <h3 className='py-2'>Schedule tour</h3>
        <p className='text-muted '>Tantas signiferumque eum at, vix an dicant fierent homero dignissim.</p>
        <Form action="" >
            <Form.Control type="text" placeholder='Your Name' className='border-0 ' />
            <Form.Control type="email" placeholder='Your Email'  className='border-0 py-3' />
            <Form.Control type="text" placeholder='Phone Number' className='border-0'  />
            <textarea  name="text" id="" placeholder='Massage' className='border-0 mt-3 ps-2' cols={"40"} rows={"3"} ></textarea>
        </Form>
        <button className='btn btn-warning w-100 mt-3 py-2'>Make enquiry</button>

    </div>
  )
}

export default Schedule