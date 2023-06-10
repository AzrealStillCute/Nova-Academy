import React from 'react'
import skillShare from "../assets/skillshare.png"
import duolingo from "../assets/duolingo.png"
import udemy from "../assets/udemy.png"
import coursera from "../assets/coursera.png"

function Companies() {
  return (
    <div className=' grid grid-cols-2 gap-y-10 lg:grid-cols-4 justify-items-center items-center mt-5 py-5 '>
    <div>
      <img src={skillShare} className=' h-10 md:h-14 grayscale contrast-0' />
    </div>
    <div>
      <img src={duolingo} className=' h-6 md:h-10 saturate-0 brightness-75' />
    </div>
    <div>
      <img src={udemy} className=' h-8 md:h-12 saturate-0 brightness-150' />
    </div>
    <div>
      <img src={coursera} className=' h-3.5 md:h-6 saturate-0 brightness-200' />
    </div>
  </div>
  )
}

export default Companies
