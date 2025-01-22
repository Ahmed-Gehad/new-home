import React from 'react'

import modernBlogVideo from '../../imges/video.mp4'

const ModernBlog = () => {
  return (
    <div className='mt-5'>
        <video src={modernBlogVideo} alt="" className='w-100 rounded-4 mt-3' controls autoPlay />
        <div className='d-flex my-2'>
            <a href="" className='me-2 '>Real Estate</a>
            - By  
            <a href="" className='ms-1'> Julie Coleman</a>
        </div>
        <h2 className='fw-bold text-orange'>Modern Design for Your Home</h2>
        <p className='text-muted mt-3'>Ea cibo choro eos, in duo iudico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persequeris contentiones nec, ex sit modus saepe scriptorem. Enim falli delicata eum te, summo omittan ne mel. At eos ferri adversarium, eu vim sanctus repudiandae. Usu cu inermis conceptam, no sea tantas.</p>
        <button className='btn btn-warning  mt-3 py-3 px-4 rounded-0'>Read More</button>
    </div>
  )
}

export default ModernBlog