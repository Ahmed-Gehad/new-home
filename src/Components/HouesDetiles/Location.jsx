import React from 'react'

const Location = () => {
    return (
        <div >
            <h4 className='fw-bold py-4 text-orange '>
                Location
            </h4>
           <div className='d-flex'>
            <p className='lead'>154 Aviation Rd, Brooklyn, NY 11234, USA
            Brooklyn New York</p>
 
            <button className='bg-orange text-white rounded-3 p-2 border-0 ms-auto  mb-4' >Show on Map</button>

           </div>
           <hr />
        </div>
    )
}

export default Location