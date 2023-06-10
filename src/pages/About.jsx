import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import aboutPhoto from "../assets/about.jpg"

function About() {
  return (
    <div className=' grid grid-cols-2 mt-36 mb-60'>
        <div className=' flex justify-center items-center relative'>
            <img src={aboutPhoto} className='   h-[28rem]'/>
            <FontAwesomeIcon icon={faPlay} className=' absolute px-4 py-3 rounded-full text-white text-2xl bg-sky-500 bg-opacity-75 hover:scale-110 transition ease-out cursor-pointer'/>
        </div>
        <div className=' px-6'>
            <div className=' flex flex-col justify-between items-start h-full'>
                <div>
                    <span className=' text-sky-500'>Our Journey and Mission</span>
                    <h2 className=' font-heading font-extrabold text-4xl mt-2'>About Our School</h2>
                    <p className=' mt-10 leading-7 text-gray-500 text-base'>At Nova acdemy, our journey is built on a steadfast mission to empower young minds and shape bright futures. Through exceptional education, nurturing environments, and a commitment to excellence, we strive to equip our students with the knowledge, skills, and values necessary to succeed in a rapidly changing world.</p>
                </div>
                <button className=' text-sky-500 flex items-center'>See More <FontAwesomeIcon icon={faArrowRight} className=' ml-2'/></button>
            </div>
        </div>
    </div>
  )
}

export default About
