import React from 'react'


const Card = (props) => {
  return (
    <div className='shadow-lrg shadow-lightteal rounded-lg flex flex-col sm:w-full md:w-33%'> 

        {/* Top Image */}
        <img className='rounded-t-lg'src={props.img} alt={props.alt} />
        
        {/* Title */}
        <h2 className='text-2xl text-center font-extrabold rounded-b-lg border-b-2 border-b-yellow px-2 py-1'>{props.title}</h2>
        
        {/* Descriptor */}
        <p className='h-[50%] text-center py text-lightteal px-3 py-1'>{props.description}</p>
        
        {/* Stack */}
        <div className='text-center'>
          <h3 className='w-full text-lg border-y-2 border-yellow'>Tech Stack</h3>
          <span className='text-lightteal mx-auto'>{props.stack} </span>
        </div>
        
        {/* Button Container */}
        <div className='flex justify-between mt-auto px-1'>
            <button className='text-yellow text-md border-2 hover:bg-yellow hover:border-yellow hover:text-darkteal hover:-translate-y-1 duration-300 px-6 py-1 my-2 mx-auto flex items-center rounded-md'>Code</button>
            <button className='text-yellow text-md border-2 hover:bg-yellow hover:border-yellow hover:text-darkteal hover:-translate-y-1 duration-300 px-6 py-1 my-2 mx-auto flex items-center rounded-md'>Live </button>
            <button className='text-yellow text-md border-2 hover:bg-yellow hover:border-yellow hover:text-darkteal hover:-translate-y-1 duration-300 px-6 py-1 my-2 mx-auto flex items-center rounded-md'>Video</button>
        </div>
    </div>
  )
}

export default Card