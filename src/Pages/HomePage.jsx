import React from 'react'
import HomeSlide from '../Components/Home/HomeSlide'
import HomeChoice from '../Components/Home/HomeChoice'
import HomeModern from '../Components/Home/HomeModern'
import HomeWorks from '../Components/Home/HomeWorks'
import HomeDiscover from '../Components/Home/HomeDiscover'
import ExpertHome from '../Components/Home/ExpertHome'
import ExploreHome from '../Components/Home/ExploreHome'
import BrandHome from '../Components/Home/BrandHome'
import BlogHome from '../Components/Home/BlogHome'

const HomePage = () => {
  return (
    <div>
        <HomeSlide />
        <HomeChoice />
        <HomeModern />
        <HomeWorks />
        <HomeDiscover />
        <ExpertHome />
        <ExploreHome />
        <BrandHome />
        <BlogHome />
    </div>
  )
}

export default HomePage