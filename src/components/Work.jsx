import React from 'react'
import Card from './Card'

const Work = () => {
  return (
    <div name='work' className='w-full sm:h-[120vh]h-screen text-lightgray bg-darkteal px-16'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>// Check out some of my recent work.</p>
        </div>

        {/* Grid Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-6'>
          <Card />
          <Card />
       </div>
      </div>
        
    </div>
  )
}

export default Work