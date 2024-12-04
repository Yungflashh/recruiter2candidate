import React from 'react'
import HeroSection from '../components/HeroSection'
import Chosen from '../components/Chosen'
import Follow from '../components/Follow'
import Contact from '../components/Contact'


const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <Chosen />
        <Follow />
       <Contact />
    </div>
  )
}

export default HomePage