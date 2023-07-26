import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Logo from '../images/Logo.png'
import Contact from '../components/Contact'
import Focus from '../components/Focus'

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Focus />
      <Work />
      <Contact />
    </div>
  )
}

export const Head = () => 
  <><title>Jordan Rhinerson</title>
  <link rel='icon' href={Logo} /></>

    export default index 
