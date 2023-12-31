import React from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../images/Logo.png'
import { useState } from 'react'
import {Link} from 'react-scroll'
import Resume from '../images/Resume.pdf'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-darkteal text-lightgray'>

        {/* Logo */}
        <div>
            <Link to="hero" smooth={true} duration={500} className='cursor-pointer'>
                <img src={Logo} alt='Jordan Rhinerson Logo' style={{width: '50px'}}/>
            </Link>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex text-xl font-medium'>
            <li>
                <Link  to="hero" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link  to="focus" smooth={true} duration={500}>
                    Focus
                </Link>
            </li>
            <li>
                <Link  to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link  to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-darkteal flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="focus" smooth={true} duration={500}>
                    Focus
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/jordan-rhinerson/'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Jrhinerson'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li> */}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-darkorange'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={Resume}>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar