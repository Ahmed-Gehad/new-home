import React from 'react'
import AboutSideBlog from './AboutSideBlog'
import RecentSideBlog from './RecentSideBlog'

const SidebarBlog = () => {
  return (
    <div className='SidebarBlog'>
        <AboutSideBlog />
        <RecentSideBlog />
    </div>
  )
}

export default SidebarBlog