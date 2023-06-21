import React from 'react'
import OffersCard from '../components/OffersCard'
import styles from '../Styles'
import { faBook, faChalkboardUser, faCoins, faFileLines, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

const offers = [
    { 
        title: "Special Programs",
        content: "Experience unique educational opportunities at our school with specialized programs that go beyond regular classes.",
        icon: faBook,
    } ,
    { 
        title: "Best Mentors",
        content: "Benefit from the guidance and support of our dedicated mentors who are passionate about helping you succeed.",
        icon: faChalkboardUser,
    } ,
    { 
        title: "Affordable Pricing",
        content: "Receive a high-quality education at a reasonable price, making it accessible to more students.",
        icon: faCoins,
    } ,
    { 
        title: "Assurance",
        content: "Rest assured that the certificates earned from Nova are recognized and valued by universities and employers.",
        icon: faFileLines,
    } ,
    { 
        title: "Scholarships",
        content: "Avail yourself of scholarship opportunities at Nova, ensuring access to quality education for deserving students.",
        icon: faUserGraduate,
    } ,
]

function OurSpecials() {

  return (
    <div className=' grid grid-cols-3 gap-7 mb-72'>
        <div>
            <span className={styles.subHeading}>Discover The Exciting Offerings</span>
            <h2 className={styles.heading}>Explore our <br/> Unique Benefits</h2>
        </div>
        {
            offers.map( (i, index) => <OffersCard key={index} icon={i.icon} title={i.title} content={i.content}/> )
        }
    </div>
  )
}

export default OurSpecials
