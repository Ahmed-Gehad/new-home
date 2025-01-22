import React from 'react'
import AboutSideBlog from './AboutSideBlog'
import RecentSideBlog from './RecentSideBlog'
import CategorySideBlog from './CategorySideBlog'
import TagSideBlog from './TagSideBlog'
import FollowSideBlog from './FollowSideBlog'
import Related from '../HouesDetiles/Related'

const SidebarBlog = () => {
  return (
    <div className='SidebarBlog'>
        <AboutSideBlog />
        <RecentSideBlog />
        <CategorySideBlog />
        <TagSideBlog />
        <FollowSideBlog />
        <Related />

    </div>
  )
}

export default SidebarBlog