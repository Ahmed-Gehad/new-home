import React from 'react'

import familyBlogImage from '../../imges/MissionImg.jpg'

export const FamilyBlog = () => {
  return (
    <div>
        <img src={familyBlogImage} alt="" className='w-100 rounded-4 mt-3' />
        <div className='d-flex my-2'>
            <a href="" className='me-2 '>Interior Design</a>
            - By  
            <a href="" className='ms-1'> Julie Coleman</a>
        </div>
        <h2 className='fw-bold text-orange'>Find Affordable Family Apartments</h2>
        <p className='text-muted mt-3'>Ea cibo choro eos, in duo iudico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persequeris contentiones nec, ex sit modus saepe scriptorem. Enim falli delicata eum te, summo omittan ne mel. At eos ferri adversarium, eu vim sanctus repudiandae. Usu cu inermis conceptam, no sea tantas.</p>
        <button className='btn btn-warning  mt-3 py-3 px-4 rounded-0'>Read More</button>
    </div>
  )
}
