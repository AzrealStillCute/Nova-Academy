import React from 'react'
import styles from '../Styles'

function FeedbackCard({photo, name, feedback}) {
  return (
    <div className='border border-gray-200 flex flex-col md:flex-row justify-between md:h-40 p-4 md:p-6 rounded-md cursor-pointer hover:bg-sky-50 hover:border-sky-500 transition ease-out'>
      <img src={photo} className='h-20 w-20 mb-3 md:mb-0 md:w-auto md:h-full rounded-md mr-8'/>
      <div className=' flex flex-col justify-between'>
        <h5 className=' font-medium text-lg mb-2'>{name}</h5>
        <p className={`${styles.regularText} h-16 overflow-y-clip`}>{feedback}</p>
      </div>
    </div>
  )
}

export default FeedbackCard
