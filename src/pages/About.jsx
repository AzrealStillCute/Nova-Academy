import React from 'react'
import howItWork from '../assets/how_it_work.jpg'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About() {
  return (
    <div className=' mt-20  sm:mt-44 grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-14 mb-56'>
        <div className=' h-72 mt-7 sm:mt-0 order-last sm:order-first sm:h-photo-small w-full flex justify-center items-center bg-cover rounded-lg bg-center' style={{backgroundImage: `url(${howItWork})` }}>
            <FontAwesomeIcon icon={faPlayCircle} className=' text-gray-200 text-2xl md:text-4xl bg-sky-400 bg-opacity-50 p-2 lg:p-3 hover:scale-110 hover:text-white transition ease-out cursor-pointer rounded-full'/>
        </div>
        <div className=' flex flex-col justify-between'>
            <div>
                <span className=' font-body text-xs md:text-sm lg:text-base text-sky-500 capitalize'>our journey and mission</span>
                <h1 className=' font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase'>How it work?</h1>
            </div>
            <div className=' mt-7 sm:mt-0'>
                <p className=' font-body text-xs md:text-sm lg:text-base text-gray-500'>Nova Academy embarked on its journey with a vision to provide exceptional education and create a nurturing environment for students to thrive. Since our establishment, we have strived to make a positive impact on the lives of our students and the community as a whole.</p>
                <div className=" w-full my-2 md:my-3 h-px bg-gray-200"></div>
                <p className=' font-body text-xs md:text-sm lg:text-base text-gray-500'>Nova Academy was founded with a clear mission to provide a holistic education that fosters the intellectual, social, emotional, and physical development of students. In our early years, we focused on building a strong foundation based on principles of excellence, innovation, and a student-centered approach.</p>
            </div>
        </div>
    </div>
  )
}

export default About
