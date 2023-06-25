import React, { useCallback } from 'react'
import styles from '../Styles'
import preGed from "../assets/preGed.jpg"
import intensiveGEd from "../assets/GedIntensive.jpg"
import Ielts from "../assets/Ielts.jpg"
import Course from "../components/Course"

const courses = [
  {
    photo : preGed,
    name: "Pre GED class",
    fee: "50",
    description : "The pre-GED class is suitable for individuals who are preparing to earn their GED (General Educational Development) certificate and are seeking...",
  } ,
  {
    photo : intensiveGEd,
    name: "GED intensive class",
    fee: "60",
    description : "The GED intensive class is designed for individuals who are committed to an accelerated and focused preparation for the GED (General Educational Development) exam. It is ideal for those who are motivated to obtain their high school equivalency diploma quickly and are willing to dedicate significant time and effort to their studies",
  } ,
  {
    photo : Ielts,
    name: "Preparation for IELTS ",
    fee: "80",
    description : "The preparation for IELTS (International English Language Testing System) class is tailored for individuals who aim to enhance their English language skills and achieve a high score on the IELTS exam. It is suitable for students who are planning to study or work in an English-speaking country and need to demonstrate their proficiency in English for academic or professional purposes.",
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

import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SlideNextBtn from '../components/SlideNextBtn'

function Programs() {

  return (
    <div className=' mb-72'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 items-center mb-10 h-50' id='Programs'>
        <div>
            <span className={styles.subHeading}>Browse the high quality</span>
            <h2 className={styles.heading}>Our Programs</h2>
        </div>
        <p className={` ${styles.bodyText}`}>
            Experience our high-quality programs that foster academic excellence, critical thinking, and holistic development.
        </p>
      </div>
      <Swiper
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        720: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1020: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }}
    >
      {
        courses.map((i, index) => <SwiperSlide key={index}><Course photo={i.photo} name={i.name} fee={i.fee} description={i.description} /></SwiperSlide>)
      }
      <SlideNextBtn/>
    </Swiper>

    </div>
  )
}

export default Programs
