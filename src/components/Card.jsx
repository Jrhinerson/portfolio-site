import React from 'react'


const Card = (props) => {
  return (
    <div className='shadow-lrg shadow-lightteal rounded-lg flex flex-col sm:w-full md:w-33%'> 

        {/* Top Image */}
        <img className='rounded-t-lg'src={props.img} alt={props.alt} />
        
        {/* Title */}
        <h2 className='text-3xl text-center font-extrabold rounded-b-lg border-b-[1px] border-b-lightteal px-2 py-1'>{props.title}</h2>
        
        {/* Descriptor */}
        <p className='h-[50%] text-center py text-lightteal px-3 py-1'>{props.description}</p>
        
        {/* Stack */}
        <div className='text-center'>
          <h3 className='w-full text-xl border-y-[1px] border-lightteal'>Tech Stack</h3>
          <span className='text-lightteal mx-auto'>{props.stack} </span>
        </div>
        
        {/* Button Container */}
        <div className='flex flex-wrap justify-around mt-auto px-1'>
          <a href={props.code}>
            <button className={props.code === undefined ? 'hidden': 'text-yellow text-md border-2 hover:bg-yellow hover:border-yellow hover:text-darkteal hover:-translate-y-1 duration-300 px-6 py-1 my-2 mx-auto flex items-center rounded-md'}>Code</button>
          </a>
          <a href={props.site}>
            <button className={props.site === undefined ? 'text-lightteal text-md border-2 px-6 py-1 my-2 mx-auto flex items-center rounded-md' : 'text-yellow text-md border-2 hover:bg-yellow hover:border-yellow hover:text-darkteal hover:-translate-y-1 duration-300 px-6 py-1 my-2 mx-auto flex items-center rounded-md'}>{props.site === undefined ? "Coming Soon" : "Site"}</button>
          </a>
          <a href={props.video}>
            <button className={props.site === undefined ? "hidden" : 'text-yellow text-md border-2 hover:bg-yellow hover:border-yellow hover:text-darkteal hover:-translate-y-1 duration-300 px-6 py-1 my-2 mx-auto flex items-center rounded-md'}>Video</button>
          </a>
        </div>
    </div>
  )
}

export default Card