import React from 'react'
import styles from '../Styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div className=' relative grid grid-cols-1 gap-y-5 lg:grid-cols-2 p-5 md:p-8 gap-x-5 bg-contact bg-cover bg-center mb-10 rounded-2xl overflow-hidden' id='Contact'>
      <div className=' z-10 bg-map h-72 md:h-96 bg-cover bg-center rounded-xl border-4 border-white lg:order-last'></div>
      <div className=' z-10 flex flex-col justify-between'>
        <div>
          <h2 className={`${styles.heading} text-white`}>Contact Us</h2>
          <span  className={`${styles.subHeading} text-white`}>Send mail to us and join our school</span>
        </div>
      <div>
        <ul className=' mt-10 text-white grid grid-cols-1 gap-y-5 pb-8 border-b'>
          <li className=' text-sm md:text-base'><FontAwesomeIcon icon={faEnvelope} className=' mr-3 md:mr-5 text-lg md:text-xl'/>novaacademy.edu</li>
          <li className=' text-sm md:text-base'><FontAwesomeIcon icon={faPhone} className=' mr-3 md:mr-5 text-lg md:text-xl'/>09 766 555 888</li>
          <li className=' text-sm md:text-base'><FontAwesomeIcon icon={faMap} className=' mr-3 md:mr-5 text-lg md:text-xl'/>No (109), South Okkalapa, Yangon</li>
        </ul>
        <div className=' text-white flex gap-x-5 text-2xl mt-5'>
          <FontAwesomeIcon icon={faFacebookSquare}/>
          <FontAwesomeIcon icon={faInstagram}/>
          <FontAwesomeIcon icon={faTwitter}/>
          <FontAwesomeIcon icon={faWhatsapp}/>
        </div>
      </div>
      </div>
      <div className=' absolute w-full h-full bg-sky-500 bg-opacity-90 '></div>
    </div>
  )
}

export default Contact
