import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-darkteal'>
        {/* Left Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-peach'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-lightgray'>Jordan Rhinerson</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-lightteal'>I'm a Full Stack Developer</h2>
            <p className='text-lightgray py-4 max-w-[700px]'>I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
            <div>
                <button className='text-lightgray border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow hover:border-yellow hover:text-darkteal duration-300'>
                    View Work<HiArrowNarrowRight className='ml-3'/>
                </button>
            </div>
        </div>
        {/* Right Container */}
    </div>
  )
}

export default Hero