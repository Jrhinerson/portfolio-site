import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-[70vh] bg-darkteal text-lightgray'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        
            {/* Row 1 */}
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
                
            {/* Row 2 */}
            <div className='max-w--[1000] w-full px-8 lg:px-[180px] grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Jordan, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p className='text-2xl'>Welcome! I'm a Software Engineer with a focus and passion for web development. I grew up in retail as a 4th generation Jeweler and a passion to help businesses thrive through technology. I'm excited to show you some of the stuff I have been working on. Let's Go!
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About