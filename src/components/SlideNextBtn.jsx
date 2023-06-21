import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSwiper } from 'swiper/react'

function SlideNextBtn() {

    const swiper = useSwiper()

  return (
    <div className=' relative z-10 flex items-center justify-between mt-5'>
        <button onClick={()=> swiper.slidePrev()} className=' hover:border rounded-md w-12 h-12'>
            <FontAwesomeIcon icon={faAngleLeft} className='text-2xl'/>
        </button>
        <button onClick={()=> swiper.slideNext()} className=' hover:border rounded-md w-12 h-12'>
            <FontAwesomeIcon icon={faAngleRight} className=' text-2xl'/>
        </button>
    </div>
  )
}

export default SlideNextBtn
