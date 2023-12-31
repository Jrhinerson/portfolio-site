import React from 'react'
import Card from './Card'
import Lodan from '../images/Lodan.png'
import TUF from '../images/TUF.png'
import Portfolio from '../images/Portfolio.png'
import {} from 'react-icons'

const Work = () => {
  return (
    <div name='work' className='w-full sm:h-[120vh]h-screen text-lightgray bg-darkteal px-16 pt-[80px]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-lightgray border-peach'>Work</p>
          <p className='text-lg pt-6'> // Check out some of my recent work.</p>
        </div>

        {/* Grid Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-12'>
          <Card 
          img={Portfolio}
          alt='Jordan Rhinerson Portfolio'
          title='Personal Portfolio'
          description='This site acts as my own professional portfolio. With an emphasis on clean yet fun design and a flexible tech stack, it has been designed in a way to allow for easy maintenance and future upgradability.'
          stack='// Gatsby // Tailwind // JavaScript //'
          code='https://github.com/Jrhinerson/portfolio-site'
          site='https://jordanrhinerson.netlify.app/'
          video='https://www.youtube.com/playlist?list=PL_qrAUKXfyRQSEUUZhXj0Anpgsa3yZ1_R'
          />
          <Card 
          img={TUF}
          alt='The Unicorn Finders Website'
          title='The Unicorn Finders'
          description='The Unicorn Finders produce a weekly show where they interview guests from unique and interesting companies. I have had the opportunity to work with the hosts to create a site that both catalogues their guests by episodes and markets their show to newcomers.'
          stack='// HTML // CSS // Bootstrap //'
          code='https://github.com/theunicornfinders/website'
          site='https://theunicornfinders.com/'
          />
          <Card 
            img={Lodan}
            alt='Lodan Jewelry Website'
            title='Lodan Jewelry'
            description='(In Process) Lodan Jewelry is a small jewelry store located in Owensboro, KY. I am currently in the midst of recreating their web presence and helping them establish an ecommerce site to expand their customer base beyond Owensboro.'
            stack='// NEXT.JS // TAILWIND // .NET // TYPESCRIPT //'
            code='https://github.com/Jrhinerson/Artisan79-Prototype-VS'
          />
       </div>
      </div>
        
    </div>
  )
}

export default Work