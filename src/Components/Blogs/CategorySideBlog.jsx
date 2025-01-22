import React from 'react'

const CategorySideBlog = () => {
  return (
    <div className='mt-5'>
        <h4 className='fw-bold'>Category</h4>
        <div className='mt-4'>
            <div className='d-flex'>
                <a href="" className='pe-2'>Houses</a>
                <p className='text-muted'>(3)</p>
            </div>
            <div className='d-flex'>
                <a href="" className='pe-2'>Interior Design</a>
                <p className='text-muted'>(7)</p>
                            </div>
            <div className='d-flex'>
                <a href="" className='pe-2'>Property</a>
                <p className='text-muted'>(12)</p>
            </div>
            <div className='d-flex'>
                <a href="" className='pe-2'>Real Estate</a>
                <p className='text-muted'>(2)</p>
            </div>
        </div>
        <hr className='my-4' />
    </div>
  )
}

export default CategorySideBlog