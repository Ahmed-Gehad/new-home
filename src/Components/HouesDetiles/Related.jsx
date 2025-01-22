import React from 'react'

import HouesPropertie from '../Properties/HouesPropertie'
import h5P1 from "../../imges/h-5-1.jpg";
import h5P2 from "../../imges/h-5-2.jpg";
import h5P3 from "../../imges/h-5-3.jpg";

const Related = () => {
  return (
    <div className='mb-5'>
        <div>
                <h3 className='py-2'>Related properties</h3>
                <p className='text-muted '>Tantas signiferumque eum at, vix an dicant fierent homero dignissim.</p>
            </div>
            <HouesPropertie
                            image1={h5P1}
                            image2={h5P2}
                            image3={h5P3}
                            type1='Villa'
                            type2='Manhattan'
                            name='Eclectic House'
                            description='Lorem ipsum dolor sit amet, wisi nemore
                            fastidii at vis, eos equidem admodum'
                            price='2,500'
                            size='155'
                            bedroom='2'
                            bathroom='2'
                        />
    </div>
  )
}

export default Related