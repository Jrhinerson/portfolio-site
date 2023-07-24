import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Work />
    </div>
  )
}

export const Head = () => 
  <title>Jordan Rhinerson</title>
  
export default index
