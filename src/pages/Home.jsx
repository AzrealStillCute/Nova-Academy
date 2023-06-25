import React from 'react'
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import heroPhoto from "../assets/hero_photo2.jpg"
import mobileHero from "../assets/hero_photo3.jpg"
import skillShare from "../assets/skillshare.png"
import duolingo from "../assets/duolingo.png"
import udemy from "../assets/udemy.png"
import coursera from "../assets/coursera.png"

function Home() {
  return (
    <div>
          <div className=' grid grid-cols-1 justify-items-center lg:justify-items-start lg:grid-cols-2 mt-10 items-center'>
        <div className=' w-full md:w-4/5 lg:w-[32rem]'>
            <h1 className='text-center lg:text-left font-heading text-4xl md:text-6xl font-extrabold'>Set Your Goal <br/> and Make It <br className='hidden lg:block'/> Happen With us</h1>
            <p className=' text-center lg:text-left text-sm md:text-lg text-gray-500 my-6 md:my-8'>Turn your goals into reality at nova academy, where we empower students to achieve greatness</p>
            <div className=' justify-center lg:justify-start flex'>
                <Button size="lg">Get Started</Button>
                <button className='flex items-center text-sky-500 text-sm md:text-base '><FontAwesomeIcon icon={faPlayCircle} className=' text-xl md:text-2xl mr-2'/>Watch Video</button>
            </div>
        </div>
        <div className=' flex justify-center'>
            <img src={heroPhoto} className=' hidden lg:block w-[35rem]'/>
            <img src={mobileHero} className=' w-[48rem] mt-10 rounded-xl lg:hidden'/>
        </div>
      </div>
        <div className=' grid grid-cols-2 gap-y-10 gap-1 lg:grid-cols-4 justify-items-center items-center mt-10 py-5 '>
        <div>
          <img src={skillShare} className=' h-10 md:h-14 grayscale contrast-0' />
        </div>
        <div>
          <img src={duolingo} className=' h-6 md:h-10 saturate-0 brightness-75' />
        </div>
        <div>
          <img src={udemy} className=' h-8 md:h-12 saturate-0 brightness-150' />
        </div>
        <div>
          <img src={coursera} className=' h-3.5 md:h-6 saturate-0 brightness-200' />
        </div>
      </div>
    </div>
  )
}

export default Home
