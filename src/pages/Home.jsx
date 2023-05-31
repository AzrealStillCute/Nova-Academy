import React from 'react'
import heroPhoto from "../assets/hero_photo.jpg"
import "./home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import student from "../assets/students.png"
import skillShare from "../assets/skillshare.png"
import duolingo from "../assets/duolingo.png"
import coursera from "../assets/coursera.png"
import udemey from "../assets/download.png"
import active from "../assets/active_students.png"
import rating from "../assets/rating.png"

function Home() {
  return (
      <div className=' flext flex-col'>
        <div className=' flex justify-between lg:h-hero items-center mt-10 lg:mt-16 flex-col lg:flex-row'>
        <div className=' w-11/12 md:w-3/4 lg:max-w-xl lg:mr-10'>
            <h1 className=' font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl capitalize text-center lg:text-left'>Set your goals <br/> and make it happen with us</h1>
            <p className=' font-body text-xs md:text-sm lg:text-base text-gray-500 mt-5 lg:mt-9 text-center lg:text-left'>Turn your goals into reality at nova academy, where we empower students to achieve greatness and unlock their full potential</p>
            <div className=' mt-5 lg:mt-9 flex justify-center lg:justify-start'>
                <button className=' text-xs lg:text-base text-white py-3 lg:py-4 px-3 lg:px-5 bg-sky-500 font-body rounded-md border-2 border-gray-100 hover:ring-2 hover:ring-sky-200 transition-all ease-out duration-300'>Get Started</button>
                <button className=' font-body text-xs lg:text-base text-sky-500 ml-10 hover:underline flex items-center'><FontAwesomeIcon icon={faCirclePlay} className=' text-xl lg:text-2xl mr-2' />Watch Video</button>
            </div>
        </div>
        <div className=' h-80 mt-7 md:mt-12 lg:mt-0 lg:h-full w-full lg:w-photo bg-cover bg-center rounded-lg relative' style={{backgroundImage: `url(${heroPhoto})` }}>
            <img src={student} alt="" srcset="" className='hidden lg:block h-20 shadow-2xl rounded-lg absolute left-5 -top-3 lg:top-2 lg:-left-14 rotate-3 hover:scale-105 transition ease-out' />
            <img src={active} className=' hidden lg:block absolute right-3 md:right-10 -top-5 h-24 shadow-active rounded-lg rotate-3 hover:scale-105 transition ease-out'/>
            <img src={rating} className='hidden lg:block h-20 absolute -bottom-7 right-20 rotate-6 shadow-lg rounded-lg hover:shadow-xl hover:scale-105 transition ease-out'/>
        </div>
      </div>
        <div className=' grid grid-cols-2 gap-y-10 lg:grid-cols-4 mt-14 lg:mt-32 mb-64 items-center'>
          <div className=' flex justify-center'>
            <img src={skillShare} className=' h-10 md:h-14  saturate-0 contrast-0 hover:saturate-100 hover:contrast-100 transition ease-out cursor-pointer' alt="" /> 
          </div>
          <div className=' flex justify-center'>
            <img src={duolingo} className=' h-6 md:h-10  saturate-0 contrast-0  hover:saturate-100 hover:contrast-100 transition ease-out cursor-pointer' alt="" />
          </div>
          <div className=' flex justify-center'>
            <img src={udemey} className=' h-8 md:h-12 saturate-0 contrast-0 hover:saturate-100 hover:contrast-100 transition ease-out cursor-pointer' alt="" />
          </div>
          <div className=' flex justify-center'>
            <img src={coursera} className=' h-3.5 md:h-6  saturate-0 contrast-0  hover:saturate-100 hover:contrast-100 transition ease-out cursor-pointer' alt="" />
          </div>

        </div>
    </div>
  )
}

export default Home
