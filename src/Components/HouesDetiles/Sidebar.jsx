import React from 'react'
import AdPerson from './AdPerson'
import Schedule from './Schedule'
import Mortgage from './Mortgage'

import Related from './Related'

const Sidebar = () => {
  return (
    <div >
      <AdPerson />
      <Schedule />
      <Mortgage />
      <Related />
      
    </div>
  )
}

export default Sidebar