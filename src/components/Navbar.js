import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] bg-darkteal text-lightgray flex justify-between items-center px-4'>
        {/* Logo */}
        <div>
            <img />
        </div>
        {/* Menu Items */}
        <ul className='flex text-lg font-semibold' >
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar