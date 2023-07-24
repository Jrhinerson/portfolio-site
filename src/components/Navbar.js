import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-darkteal flex justify-between items-center p-4'>
        {/* Logo */}
        <div>
            <img />
        </div>
        {/* Menu Items */}
        <ul className='text-lightgray'>
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar