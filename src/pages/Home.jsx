import React from 'react'
import heroPhoto from "../assets/hero_photo.jpg"
import "./home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className=' flex justify-between lg:h-hero items-center mt-10 flex-col lg:bg-slate-100 lg:flex-row'>
        <div className=' w-11/12 md:w-3/4 lg:max-w-xl'>
            <h1 className=' font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl capitalize text-center lg:text-left'>Set your goals <br/> and make it happen with us</h1>
            <p className=' font-body text-xs md:text-sm lg:text-base text-gray-500 mt-5 lg:mt-9 text-center lg:text-left'>Turn your goals into reality at nova academy, where we empower students to achieve greatness and unlock their full potential</p>
            <div className=' mt-5 lg:mt-9 flex justify-center lg:justify-start'>
                <button className=' text-xs lg:text-base text-white py-3 lg:py-4 px-3 lg:px-5 bg-sky-500 font-body rounded-md border-2 border-gray-100 hover:ring-2 hover:ring-sky-200 transition-all ease-out duration-300'>Get Started</button>
                <button className=' font-body text-xs lg:text-base text-sky-500 ml-10 hover:underline'><FontAwesomeIcon icon={faCirclePlay} className=' text-base lg:text-xl mr-2' />Watch Video</button>
            </div>
        </div>
        <div className=' h-photo mt-10 md:mt-12 lg:mt-0 lg:h-full w-full lg:w-photo bg-slate-200 bg-cover bg-center rounded-lg relative' style={{backgroundImage: `url(${heroPhoto})` }}>
            <div className='p-4 bg-white lg:p-5 flex items-center rounded-lg absolute left-5 -top-3 lg:top-5 lg:-left-14 rotate-3 shadow-mobile lg:shadow-2xl'>
              <FontAwesomeIcon icon={faGraduationCap} className=' text-2xl lg:text-3xl text-sky-500 mr-3'/>
              <div>
                <span className=' block font-body text-base lg:text-lg -mb-2 lg:-mb-1 font-bold'>100k+</span>
                <span className=' font-body text-xs lg:text-sm text-gray-500'>Complete Students</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home
