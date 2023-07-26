import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-darkteal flex justify-center items-center px-16'>
        <form className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-peach text-lightgray'>Contact</p>
                <p className='text-lightgray text-lg py-4'>// Submit the form below or shoot me an email - jordan.rhinerson@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-1' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className="bg-[#ccd6f6] p-2" name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-lightgray text-lg border-2 hover:bg-yellow hover:border-yellow hover:text-darkteal duration-300 px-6 py-3 my-2 mx-auto flex items-center rounded-md'>Let's Collaborate</button>
        </form>

    </div>
  )
}

export default Contact