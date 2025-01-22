import React from 'react'

import HouesPropertie from '../Properties/HouesPropertie'
import h4P1 from "../../imges/h-4-1.jpg";
import h4P2 from "../../imges/h-4-2.jpg";
import h4P3 from "../../imges/h-4-3.jpg";

const Related = () => {
  return (
    <div className='mb-5'>
        <div>
                <h3 className='py-2'>Related properties</h3>
                <p className='text-muted '>Tantas signiferumque eum at, vix an dicant fierent homero dignissim.</p>
            </div>
            <HouesPropertie
                            link={"/Pages/HouesDetiles1"}
                            image1={h4P1}
                            image2={h4P2}
                            image3={h4P3}
                            type1='Condos'
                            type2='Manhattan'
                            name='Cozy Cottage'
                            description='Lorem ipsum dolor sit amet, wisi nemore
                            fastidii at vis, eos equidem admodum'
                            price='650,000'
                            size='240'
                            bedroom='4'
                            bathroom='3'
                        />
    </div>
  )
}

export default Related