import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-darkteal'>
        {/* Left Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-lightteal text-lg'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-lightgray'>Jordan Rhinerson</h1>
            <h2 className='text-3xl sm:text-7xl font-bold text-lightteal'>I'm a Full Stack Developer</h2>
            <p className='text-lg text-lightgray py-4 max-w-[700px]'>Welcome! I'm a software developer, husband, and as of recent a father! I grew up in a small family owned and operated business with a passion to help businesses thrive through technology. I'm an open book so please don't hesitate to contact me with any questions or simply to talk. Otherwise, let's see what all I've been working on. <br/><span className='text-xl'>Let's Go!</span></p>
            <div>
              <Link to="work" smooth={true} duration={500}>
                <button className='text-lg text-yellow rounded-lg border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow hover:text-darkteal hover:-translate-y-1 duration-300'>
                    View Work<HiArrowNarrowRight className='ml-3'/>
                </button>
              </Link>
            </div>
        </div>
        {/* Right Container */}
    </div>
  )
}

export default Hero