import React, { useState } from 'react'
import headerLogo from '../assets/header_logo.png'

function Header() {

  const [ isClick , setClick ] = useState(false)

  const clickHandle = () => {
    setClick(!isClick)
  }

  return (
    <header className=' w-full flex space justify-between items-center relative '>
       <img src={headerLogo} className=' h-10 md:h-12'></img>
        <div  className=' hidden lg:block'>
          <a className=' font-body text-sm text-gray-500 hover:text-black transition-colors ease-out duration-300 cursor-pointer mx-4 xl:mx-5'>About</a>
          <a className=' font-body text-sm text-gray-500 hover:text-black transition-colors ease-out duration-300 cursor-pointer mx-4 xl:mx-5'>Programs</a>
          <a className=' font-body text-sm text-gray-500 hover:text-black transition-colors ease-out duration-300 cursor-pointer mx-4 xl:mx-5'>Admission</a>
          <a className=' font-body text-sm text-gray-500 hover:text-black transition-colors ease-out duration-300 cursor-pointer mx-4 xl:mx-5'>Testimonials</a>
          <a className=' font-body text-sm text-gray-500 hover:text-black transition-colors ease-out duration-300 cursor-pointer mx-4 xl:mx-5'>Contact</a>
        </div>
        <nav className={` flex lg:hidden pt-20 absolute top-14 md:top-16 h-screen w-full bg-white bg-opacity-95 z-10 flex-col items-center scale-0 ${ isClick ? " scale-100" : ""} `}>
          <a className=' font-body text-base md:text-lg mb-10 font-medium text-gray-500'>About</a>
          <a className=' font-body text-base md:text-lg mb-10 font-medium text-gray-500'>Programs</a>
          <a className=' font-body text-base md:text-lg mb-10 font-medium text-gray-500'>Admission</a>
          <a className=' font-body text-base md:text-lg mb-10 font-medium text-gray-500'>Testimonials</a>
          <a className=' font-body text-base md:text-lg mb-10 font-medium text-gray-500'>Contact</a>
        </nav>
        <button onClick={clickHandle} className=' block lg:hidden'>
          <div className={` h-0.5 bg-black w-6 mb-1.5 rounded-sm transition-all ease-out duration-300 ${ isClick ? " origin-top-right -rotate-45" : ""}`} ></div>
          <div className={` h-0.5 bg-black w-4 ml-2 mb-1.5 rounded-sm transition-all ease-out duration-500 ${ isClick ? " scale-0" : ""}`}></div>
          <div className={` h-0.5 bg-black w-6 rounded-sm transition-all ease-out duration-300 ${ isClick ? " origin-bottom-right rotate-45" : ""}`} ></div>
        </button>
        <div className=' hidden lg:block'>
          <span className=' font-body text-sm text-gray-500 mr-3 cursor-pointer hover:text-black transition-colors ease-out duration-300'>Log In?</span>
          <button className=' text-sm text-white py-2.5 px-4 bg-sky-400 font-body rounded-md border-2 border-gray-100 hover:ring-2 hover:ring-sky-200 transition-all ease-out duration-300'>Register</button>
        </div>
    </header>
  )
}

export default Header
