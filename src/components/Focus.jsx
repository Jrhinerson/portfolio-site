import React from 'react'
import Gatsby from '../images/Gatsby.png'
import Javascript from '../images/Javascript.png'
import Nextjs from '../images/Nextjs.png'
import Net from '../images/Net.png'
import Tailwind from '../images/Tailwind.png'

const Focus = () => {
  return (
    <div name='focus' className='w-full h-[70vh] pt-[100px] bg-darkteal text-lightgray'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        
            {/* Row 1 */}
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-peach'>Current Focus</p>
                </div>
                <div />
            </div>
                
            {/* Row 2 */}
            <div className='w-full px-8 lg:px-[180px] grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right text-3xl font-bold'>
                    <p>"Efforts and courage are not enough without purpose and direction"</p>
                    <div className='flex flex-row sm:justify-end flex-wrap px-2 w-full py-1 mt-8'>
                        <img className='px-3 h-[5vh]' src={Javascript} alt='Javascript' />
                        <img className='px-3 h-[5vh]' src={Gatsby} alt='Gatsby' />
                        <img className='px-3 h-[5vh]' src={Nextjs} alt='Next.js' />
                        <img className='px-3 h-[5vh]' src={Tailwind} alt='Tailwind' />
                        <img className='px-3 h-[5vh]' src={Net} alt='.Net' />
                    </div>
                </div>
                <div>
                    <p className='text-lg'>Currently, my focus is on gaining more hands-on experience with Tailwind on smaller projects such as this portfolio site or recreating The Unicorn Finders website to be more responsive and easier to maintain.<br /> Afterwards, all of my focus will be on returning to the e-commerce site for Lodan Jewelry Design Studio where I'll be utilizing Next.js, Tailwind, and .Net to create the site.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Focus