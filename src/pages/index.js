import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Logo from '../images/Logo.png'
import Contact from '../components/Contact'

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Work />
      <Contact />
    </div>
  )
}

export const Head = () => 
  <><title>Jordan Rhinerson</title>
  <link rel='icon' href={Logo} /></>

    export default index 
