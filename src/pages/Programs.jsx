import React from 'react'
import styles from '../Styles'
import Course from '../components/Course'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import preGed from "../assets/preGed.jpg"

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import 'swiper/css';

const courses = [
  {
    photo : preGed,
    name: "Pre GED class",
    fee: "50",
    description : "The pre-GED class is suitable for individuals who are preparing to earn their GED (General Educational Development) certificate and are seeking...",
  } ,
  {
    photo : preGed,
    name: "Pre GED class",
    fee: "50",
    description : "The pre-GED class is suitable for individuals who are preparing to earn their GED (General Educational Development) certificate and are seeking...",
  } ,
  {
    photo : preGed,
    name: "Pre GED class",
    fee: "50",
    description : "The pre-GED class is suitable for individuals who are preparing to earn their GED (General Educational Development) certificate and are seeking...",
  } ,
  {
    photo : preGed,
    name: "Pre GED class",
    fee: "50",
    description : "The pre-GED class is suitable for individuals who are preparing to earn their GED (General Educational Development) certificate and are seeking...",
  } ,
  {
    photo : preGed,
    name: "Pre GED class",
    fee: "50",
    description : "The pre-GED class is suitable for individuals who are preparing to earn their GED (General Educational Development) certificate and are seeking...",
  } ,
  
]



function Programs() {

  const swiper = useSwiper()

  return (
    <div className=' mb-80'>
      <div className='grid grid-cols-2 items-center'>
        <div>
            <span className={styles.subHeading}>Browse the high quality</span>
            <h2 className={styles.heading}>Our Programs</h2>
        </div>
        <p className={` ${styles.bodyText}`}>
            Experience our high-quality programs that foster academic excellence, critical thinking, and holistic development.
        </p>
      </div>
      <div className='relative flex items-center mt-20'>
        {/* <FontAwesomeIcon icon={faChevronLeft} className=' z-10 h-7 py-3.5 px-5 rounded-full text-white bg-gray-400 absolute -left-8 cursor-pointer hover:scale-95 hover:bg-gray-500 transition ease-out'/>
        <FontAwesomeIcon icon={faChevronRight} className=' z-10 h-7 py-3.5 px-5 rounded-full text-white bg-gray-400 absolute -right-8 cursor-pointer hover:scale-95 hover:bg-gray-500 transition ease-out'/> */}
        <Swiper
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroupSkip={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
          courses.map( i => <SwiperSlide>
            <Course photo={i.photo} name={i.name} fee={i.fee} description={i.description} />
          </SwiperSlide> )
          }
        </Swiper>
        <button className=' bg-sky-500 p-5' onClick={()=> swiper.slideNext()}> next</button>
      </div>
    </div>
  )
}

export default Programs
