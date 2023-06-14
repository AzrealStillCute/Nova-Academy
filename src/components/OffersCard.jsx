import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function OffersCard(props) {
  return (
    <div className=' border border-gray-200 p-5 rounded-lg'>
      <FontAwesomeIcon icon={props.icon} className=' h-9 text-sky-500 bg-sky-50 p-4 rounded-md'/>
      <h5 className=' text-xl font-semibold my-4'>{props.title}</h5>
      <p className=' text-sm text-gray-500 leading-6'>{props.content}</p>
    </div>
  )
}

export default OffersCard
