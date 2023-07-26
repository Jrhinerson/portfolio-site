import React from 'react'
import Logo from '../images/Logo.png'

const Card = () => {
  return (
    <div className='flex flex-col sm:w-full md:w-33%'> 
        {/* Top Image */}
        <img src={Logo} alt='Logo' />
        {/* Title */}
        <h2 className='text-xl font-bold border-b-2 border-b-peach'>The Unicorn Finders</h2>
        {/* Descriptor */}
        <p>The Unicorn Finders produce a weekly show where they interview guests from unique and interesting companies. I have had the opportunity to work with the hosts to create a site that both catalogues their guests by episodes and markets their show to newcomers.</p>
        {/* Button Container */}
        <div className='flex'>
            <button className='text-lightgray text-lg border-2 hover:bg-yellow hover:border-yellow hover:text-darkteal duration-300 px-6 py-1 my-2 mx-auto flex items-center rounded-md'>Code</button>
            <button className='text-lightgray text-lg border-2 hover:bg-yellow hover:border-yellow hover:text-darkteal duration-300 px-6 py-1 my-2 mx-auto flex items-center rounded-md'>Live </button>
            <button className='text-lightgray text-lg border-2 hover:bg-yellow hover:border-yellow hover:text-darkteal duration-300 px-6 py-1 my-2 mx-auto flex items-center rounded-md'>Video</button>
        </div>
    </div>
  )
}

export default Card