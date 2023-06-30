import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import aboutPhoto from "../assets/about.jpg"
import styles from '../Styles'

function About() {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 justify-items-start mt-36 mb-60' id='About'>
        <div className=' flex justify-center mb-10 lg:mb-0 items-center relative'>
            <img src={aboutPhoto} className='w-[28rem]'/>
            <FontAwesomeIcon icon={faPlay} className=' absolute px-4 py-3 rounded-full text-white text-2xl bg-sky-500 bg-opacity-75 hover:scale-110 transition ease-out cursor-pointer'/>
        </div>
        <div>
            <div className=' flex flex-col justify-between items-start h-full'>
                <div>
                    <span className={styles.subHeading}>Our Journey and Mission</span>
                    <h2 className={styles.heading}>About Our School</h2>
                    <p className={`mt-10 ${styles.bodyText}`}>At Nova acdemy, our journey is built on a steadfast mission to empower young minds and shape bright futures. Through exceptional education, nurturing environments, and a commitment to excellence, we strive to equip our students with the knowledge, skills, and values necessary to succeed in a rapidly changing world.</p>
                </div>
                <button className={`${styles.bodyText} text-sky-500 mt-10`}>See More <FontAwesomeIcon icon={faArrowRight} className=' ml-2'/></button>
            </div>
        </div>
    </div>
  )
}

export default About
