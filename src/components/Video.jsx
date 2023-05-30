import React from 'react'
import musicVideo from "../assets/NeverGonnaGiveYouUp.mp4"

function Video() {
  return (
    <video className='absolute w-video z-10 aspect-video' src={musicVideo} controls autoPlay/>
  )
}

export default Video
