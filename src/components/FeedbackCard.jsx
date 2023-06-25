import React from 'react'
import styles from '../Styles'

function FeedbackCard({photo, name , batch, feedback}) {
  return (
    <div className=' border border-gray-200 h-36 md:h-40 rounded-md flex px-4 py-3 md:py-5 md:px-8'>
      <img src={photo} className=' w-16 lg:w-20 aspect-square shrink-0 rounded-full bg-sky-500 mr-5 md:mr-8 self-center'/>
      <div>
        <h5 className=' font-medium text-lg mb-1'>{name}</h5>
        <span className='text-sm mb-1.5 block text-gray-500'>{batch}</span>
        <p className={`${styles.regularText} h-14 md:h-16 overflow-y-clip`}>{feedback}</p>
      </div>
    </div>
  )
}

export default FeedbackCard
